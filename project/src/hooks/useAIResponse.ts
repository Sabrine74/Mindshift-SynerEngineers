import { useState } from 'react';

export function useAIResponse() {
  const [isLoading, setIsLoading] = useState(false);

  const getAIResponse = async (message: string, roomId: string) => {
    setIsLoading(true);
    try {
      // Simulate AI response based on room context
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const responses: Record<string, string[]> = {
        studies: [
          "Here are some effective study techniques you might find helpful: 1) The Pomodoro Technique for time management, 2) Active recall through practice tests, and 3) Spaced repetition for better retention.",
          "Breaking down complex topics into smaller parts can make them more manageable. What specific subject are you struggling with?",
          "Have you tried creating mind maps? They're excellent for visualizing connections between different concepts.",
          "Regular breaks are crucial for effective studying. Try studying for 25 minutes, then take a 5-minute break.",
        ],
        family: [
          "Family dynamics can be challenging. Would you like to talk about what's specifically bothering you?",
          "It's important to maintain open communication with family members. Have you tried expressing your feelings to them?",
          "Sometimes, taking a step back and viewing situations from different perspectives can help resolve family conflicts.",
          "Setting healthy boundaries with family members is important. Would you like to discuss strategies for this?",
        ],
        friends: [
          "Friendships require nurturing and understanding. What aspects of your friendships are you concerned about?",
          "Making new friends can be challenging. Would you like some tips on building meaningful connections?",
          "Conflict with friends is normal. The key is addressing issues openly and honestly. Want to discuss your situation?",
          "It's important to maintain your own identity in friendships. Let's talk about setting healthy boundaries.",
        ],
        general: [
          "I understand this might be difficult to talk about. Take your time, and we can explore this together.",
          "Your feelings are valid. Would you like to tell me more about what's on your mind?",
          "Sometimes, just talking about our concerns can help us see things more clearly. What's troubling you?",
          "I'm here to support you. Would you like to explore some coping strategies together?",
        ],
      };

      const roomResponses = responses[roomId.toLowerCase()] || responses.general;
      const randomResponse = roomResponses[Math.floor(Math.random() * roomResponses.length)];
      
      return randomResponse;
    } finally {
      setIsLoading(false);
    }
  };

  return { getAIResponse, isLoading };
}