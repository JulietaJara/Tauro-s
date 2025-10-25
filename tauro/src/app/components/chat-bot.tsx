"use client"

import { useChat } from "ai/react"
import { Bot, User, Sparkles, Calendar, Users, Gift, Baby, GraduationCap, PartyPopper } from "lucide-react"
import Button from "./ui/button"
import { cn } from "../lib/utils"
import { useEffect, useState, ElementType } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export default function ChatBot() {
  const { messages, setMessages } = useChat()
  const [isTyping, setIsTyping] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "initial-message",
          role: "assistant" as const,
          content: getInitialMessage(),
        },
      ])
    }
  }, [messages, setMessages])

  const getInitialMessage = () =>
    "¡Hola! Soy Caramelo 🍭 Tu asistente para eventos especiales. ¿Qué tipo de celebración estás planeando?"

  const optionIcons: Record<string, ElementType > = {
    A: Calendar,
    B: Users,
    C: GraduationCap,
    D: GraduationCap,
    E: PartyPopper,
    F: Baby,
    G: Gift,
  }

  // Todos los colores ahora son variaciones de rojo y blanco
  const optionColors: Record<string, string> = {
    A: "bg-gradient-to-r from-red-600 to-red-500",
    B: "bg-gradient-to-r from-red-500 to-pink-500",
    C: "bg-gradient-to-r from-red-700 to-red-600",
    D: "bg-gradient-to-r from-pink-600 to-red-500",
    E: "bg-gradient-to-r from-red-500 to-rose-500",
    F: "bg-gradient-to-r from-rose-500 to-pink-500",
    G: "bg-gradient-to-r from-red-800 to-red-600",
  }

  const responses: Record<string, { title: string; details: string; highlights: string[] }> = {
    A: {
      title: "Cumpleaños infantil",
      details: [
        "El cumpleaños infantil incluye para 30 adultos y 30 niños:",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 3 horas de duración",
        "👩‍🍳 Una camarera",
        "🎭 Una animadora",
        "👶 Una persona a cargo del cuidado de los niños",
        "🍽 Un encargado de cocina",
        "⚽ Pelotero",
        "🌈 Sala blanda",
        "🎱 Metegol",
        "🎈 Inflable",
        "🏟️ Canchita de fútbol",
        "🎮 Playstation 4 y 5",
        "🍭 Bolsita de golosinas y piñata",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
        "👨‍👩‍👧‍👦 Es importante destacar que la cantidad tanto de adultos como de chicos se puede personalizar.",
      ].join("\n"),
      highlights: ["30 adultos + 30 niños", "3 horas", "Animadora incluida", "Pelotero y juegos"],
    },
    B: {
      title: "Fiestas Adultos",
      details: [
        "La fiesta para adultos incluye para 60 personas:",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Dos camareras",
        "🎭 Una animadora",
        "🍽 Un encargado de cocina",
        "🎱 Metegol",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
        "👨‍👩‍👧‍👦 Es importante destacar que la cantidad tanto de adultos como de chicos se puede personalizar.",
      ].join("\n"),
      highlights: ["60 personas", "4 horas", "Dos camareras", "Ambiente climatizado"],
    },
    C: {
      title: "Egresados",
      details: [
        "Egresados incluye (niños mayores de 10 años):",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Dos camareras",
        "🎭 Una animadora",
        "🍽 Un encargado de cocina",
        "🍔 Menu infantil",
        "🏟️ Canchita de fútbol",
        "🎮 Playstation 4 y 5",
        "🎱 Metegol",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
        "👨‍👩‍👧‍👦 Es importante destacar que la cantidad tanto de adultos como de chicos se puede personalizar.",
      ].join("\n"),
      highlights: ["Mayores de 10 años", "4 horas", "Menu infantil", "PlayStation incluido"],
    },
    D: {
      title: "Egresaditos",
      details: [
        "Egresaditos incluye para 40 niños y 50 adultos:",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Dos camareras",
        "🎭 Una animadora",
        "👶 Una persona a cargo del cuidado de los niños",
        "🍽 Un encargado de cocina",
        "🍕 Pizza party para adultos",
        "🍔 Menu infantil",
        "🎩 Show de magia",
        "🌈 Sala blanda",
        "🎈 Inflable",
        "🏟️ Canchita de fútbol",
        "🎮 Playstation 4 y 5",
        "🎱 Metegol",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
        "👨‍👩‍👧‍👦 Es importante destacar que la cantidad tanto de adultos como de chicos se puede personalizar.",
      ].join("\n"),
      highlights: ["40 niños + 50 adultos", "Show de magia", "Pizza party", "Sala blanda"],
    },
    E: {
      title: "Matinee",
      details: [
        "La matinee incluye para 50 invitados (mayores 11 años):",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Una camarera",
        "🎭 Una animadora",
        "👶 Una persona a cargo del cuidado de los niños",
        "🍽 Un encargado de cocina",
        "🎱 Metegol",
        "🏟️ Canchita de fútbol",
        "🎮 Playstation 4 y 5",
        "🍹 Barra de tragos frutales",
        "🍭 Bolsita de golosinas y piñata",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
        "👨‍👩‍👧‍👦 Es importante destacar que la cantidad tanto de adultos como de chicos se puede personalizar.",
      ].join("\n"),
      highlights: ["50 invitados", "Mayores de 11 años", "Barra de tragos frutales", "4 horas"],
    },
    F: {
      title: "Baby Shower",
      details: [
        "El baby Shower incluye:",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Dos camareras",
        "🎭 Una animadora",
        "👶 Una persona a cargo del cuidado de los niños",
        "🍽 Un encargado de cocina",
        "⚽ Pelotero",
        "🌈 Sala blanda",
        "🎱 Metegol",
        "💄 Maquillaje para la futura mamá",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
      ].join("\n"),
      highlights: ["Celebración especial", "Maquillaje incluido", "Pelotero", "4 horas"],
    },
    G: {
      title: "Primer añito",
      details: [
        "El primer añito incluye:",
        "☕ Té/café y kit de mate en el momento de la torta",
        "⏳ 4 horas de duración",
        "👩‍🍳 Dos camareras",
        "🎭 Una animadora",
        "👶 Una persona a cargo del cuidado de los niños",
        "🍽 Un encargado de cocina",
        "⚽ Pelotero",
        "🌈 Sala blanda",
        "🎱 Metegol",
        "🎈 Inflable",
        "🏟️ Canchita de fútbol",
        "🎮 Playstation 4 y 5",
        "🍭 Bolsita de golosinas y piñata",
        "💌 Tarjeta de invitación",
        "🍽️ Vajilla apta para servicio de lunch",
        "📶 Wifi",
        "⚡ Grupo electrógeno",
        "🚗 Estacionamiento privado",
        "🏥 Cobertura médica",
        "❄️ Ambiente climatizado",
        "🌿 Jardín y deck",
        "📽️ Proyector",
      ].join("\n"),
      highlights: ["Primera celebración", "Sala blanda", "Inflable", "Cuidado especializado"],
    },
  }

  const handleOptionSelect = (option: string) => {
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: `Quiero saber sobre: ${responses[option].title}`,
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setIsTyping(true)
    setShowOptions(false)
    setExpandedCard(null)

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 2).toString(),
        role: "assistant" as const,
        content: responses[option]?.details || "No entiendo esa opción, por favor intenta de nuevo.",
      }

      setMessages((prevMessages) => [...prevMessages, botMessage])
      setIsTyping(false)

      setTimeout(() => {
        const followUpMessage = {
          id: (Date.now() + 3).toString(),
          role: "assistant" as const,
          content: "¿Te gustaría conocer otro tipo de evento? ¡Estoy aquí para ayudarte! ✨",
        }
        setMessages((prevMessages) => [...prevMessages, followUpMessage])
        setShowOptions(true)
      }, 1000)
    }, 1500)
  }

  const TypingIndicator = () => (
    <div className="flex items-center gap-2 p-4 bg-white rounded-2xl border-2 border-red-100 shadow-lg">
      <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-md">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-red-700 font-medium">Caramelo está escribiendo</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Header - Rojo y blanco */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 sm:p-4 shadow-xl border-b-4 border-red-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-red-200">
            <Bot className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl drop-shadow-sm">Caramelo</h1>
            <p className="text-red-100 text-sm font-medium">Tu asistente para eventos especiales</p>
          </div>
          <div className="ml-auto bg-white/20 rounded-full p-2">
            <Sparkles className="w-6 h-6 text-white animate-pulse drop-shadow-sm" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-2 sm:gap-3 max-w-[90%] sm:max-w-[85%] animate-in slide-in-from-bottom-2 duration-300",
              message.role === "user" ? "ml-auto flex-row-reverse" : "",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 border-2",
                message.role === "user"
                  ? "bg-white text-red-600 border-red-200"
                  : "bg-gradient-to-r from-red-600 to-red-500 text-white border-red-700",
              )}
            >
              {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={cn(
                "rounded-2xl px-4 py-3 shadow-lg border-2 max-w-full",
                message.role === "user"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white border-red-700"
                  : "bg-white border-red-200",
              )}
            >
              <div className={cn("text-sm leading-relaxed", message.role === "user" ? "text-white" : "text-red-900")}>
                <span style={{ whiteSpace: "pre-line" }}>{message.content}</span>
              </div>
            </div>
          </div>
        ))}

        {isTyping && <TypingIndicator />}

        {(messages.length === 1 || showOptions) && (
          <div className="mt-6 animate-in fade-in-50 duration-500">
            <div className="text-center mb-6 bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-2">Elige tu evento perfecto</h3>
              <p className="text-sm text-red-600 font-medium">
                Haz clic en cualquier opción para ver todos los detalles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(responses).map(([option, data]) => {
                const IconComponent = optionIcons[option]
                const isExpanded = expandedCard === option

                return (
                  <Card
                    key={option}
                    className={cn(
                      "cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:scale-105 bg-white",
                      isExpanded
                        ? "ring-4 ring-red-300 shadow-xl border-red-400 scale-105"
                        : "hover:border-red-300 border-red-100",
                    )}
                    onClick={() => setExpandedCard(isExpanded ? null : option)}
                  >
                    <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white",
                            optionColors[option],
                          )}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base font-bold text-red-800">{data.title}</CardTitle>
                          <Badge
                            variant="secondary"
                            className="mt-1 text-xs bg-red-100 text-red-700 border border-red-200"
                          >
                            Opción {option}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 p-3 sm:p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {data.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-red-50 text-red-700 border-red-300 font-medium"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      {isExpanded && (
                        <div className="mt-3 p-4 bg-red-50 rounded-xl animate-in slide-in-from-top-2 duration-200 border border-red-200">
                          <p className="text-xs text-red-600 mb-2 font-semibold">Vista previa:</p>
                          <p className="text-sm text-red-800 line-clamp-3 font-medium">
                            {data.details.split("\n").slice(0, 3).join("\n")}...
                          </p>
                        </div>
                      )}

                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOptionSelect(option)
                        }}
                        className={cn(
                          "w-full mt-3 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold border-2 border-white/20",
                          optionColors[option],
                          "hover:scale-105",
                        )}
                        size="sm"
                      >
                        Ver detalles completos
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
