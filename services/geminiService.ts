
import { GoogleGenAI } from "@google/genai";

export const getAIAnalysis = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Bạn là một chuyên gia phân tích thị trường cao cấp chuyên về ngành vật liệu xây dựng và sơn tại Việt Nam. 
        Hãy cung cấp các phân tích chiến lược, dự báo xu hướng và lời khuyên cạnh tranh dựa trên dữ liệu thực tế. 
        Sử dụng tiếng Việt, văn phong chuyên nghiệp, logic và có số liệu minh họa nếu có thể.`,
        tools: [{ googleSearch: {} }]
      },
    });
    
    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
};
