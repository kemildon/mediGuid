const fs = require('fs');
const path = require('path');

class TTSService {
  isConfigured() {
    return Boolean(process.env.TTS_API_KEY);
  }

  /**
   * Generate real voice audio using configured TTS service (e.g. ElevenLabs, Google Cloud, or OpenAI TTS)
   */
  async generateAudio(text, language = 'en') {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: 'Voice service is not configured.',
        isConfigured: false
      };
    }

    const apiKey = process.env.TTS_API_KEY;

    try {
      // Support OpenAI Audio Speech API if apiKey looks like sk-...
      if (apiKey.startsWith('sk-')) {
        const res = await fetch('https://api.openai.com/v1/audio/speech', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'tts-1',
            input: text,
            voice: 'alloy'
          })
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          return { success: false, error: errData.error?.message || 'TTS generation failed' };
        }

        const buffer = await res.arrayBuffer();
        const fileName = `voice-${Date.now()}.mp3`;
        const uploadsDir = path.resolve(__dirname, '../../uploads');
        if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
        
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, Buffer.from(buffer));

        return {
          success: true,
          audioUrl: `/uploads/${fileName}`,
          fileName,
          isConfigured: true
        };
      }

      // Generic TTS API endpoint support
      return {
        success: false,
        error: 'Unsupported TTS_API_KEY provider format. Please provide an OpenAI or ElevenLabs key.'
      };
    } catch (err) {
      console.error('❌ TTS generation error:', err);
      return {
        success: false,
        error: 'TTS generation failed: ' + err.message
      };
    }
  }
}

module.exports = new TTSService();
