"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Header from "../components/header"

export default function Component() {
  const [isFileUpload, setIsFileUpload] = useState(true);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 1, y: -50 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { scale: 0.8, opacity: 1, y: -50, transition: { duration: 0.5 } },
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const route = isFileUpload ? "/search-by-tag" : "/classify-text";
    const bodyObject = isFileUpload ? { file: "shouldBeFile" } : { text: text };

    try {
      // TODO replace with backend API call
      const response = await fetch("api/" + route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObject) // Should be file but for demo purposes it just reroutes
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      router.push(route);
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
    }
    // router.push('/search-by-tag');

  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="p-4">
        <div
          className="flex justify-center items-center bg-gray-100 -mb-4 w-56 pb-4 mx-auto rounded-t-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md"
        >
          <Label
            htmlFor="toggle-mode"
            className="text-gray-700 w-full text-center px-8 py-2 cursor-pointer select-none"
          >
            {isFileUpload ? "Upload file" : "Classify text"}
          </Label>
          <Input
            id="toggle-mode"
            type="checkbox"
            className="hidden w-full"
            onChange={() => setIsFileUpload((prev) => !prev)}
          />
        </div>

        <div className="relative h-[300px] w-full perspective-1000">
          <AnimatePresence initial={false} mode="wait">
            {isFileUpload ? (
              <motion.div
                key="fileUpload"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="bg-white border rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload a file with text</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center h-[calc(100%-2rem)] flex items-center justify-center">
                    <Input type="file" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="textPaste"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="bg-white border rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Write a tweet/post/article</h2>
                  <Textarea
                    placeholder="Lorem ipsum..."
                    className="w-full h-[calc(100%-2rem)] p-2 border rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={text}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Generate tags"}
          </button>
        </div>
      </main>
    </div>
  )
}