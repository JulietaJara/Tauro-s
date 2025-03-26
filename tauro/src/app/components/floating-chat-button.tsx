"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import Chatbot from "./chat-bot"

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-3 text-white flex justify-between items-center">
            <h3 className="font-medium">Asistente Virtual</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="h-[calc(100%-48px)]">
            <Chatbot />
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}

