export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  citations?: Array<{ documentId: string; chunkId: string; score: number }>;
  timestamp: string;
}