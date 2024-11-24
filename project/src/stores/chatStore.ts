import { create } from 'zustand';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatStore {
  messages: Record<string, Message[]>;
  addMessage: (roomId: string, message: Message) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: {},
  addMessage: (roomId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [roomId]: [...(state.messages[roomId] || []), message],
      },
    })),
}));