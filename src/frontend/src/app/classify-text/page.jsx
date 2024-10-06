"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Copy, CopyCheck } from "lucide-react"
import Header from "../../components/header"

export default function ClassifyText({ searchParams }) {
  const [tags, setTags] = useState(searchParams.labels)
  const [prefix, setPrefix] = useState("")
  const [copiedStates, setCopiedStates] = useState({})

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      if (id) {
        setCopiedStates(prev => ({ ...prev, [id]: true }))
        setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000)
      }
    })
  }

  const copyAllTags = () => {
    const allTags = tags.map(tag => `${prefix}${tag}`).join(" ")
    copyToClipboard(allTags, "all")
  }

  return (
    <div className="container mx-auto p-4 pt-0 space-y-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-md font-bold mb-4">User Input</h2>
          <p className="text-sm text-gray-700">{searchParams.sequence}</p>
        </div>
        <div className="border text-md p-4 rounded-lg h-fit">
          <h2 className="font-bold mb-4">Text Hashtags</h2>
          <div className="space-y-4">
            <div className="flex text-md space-x-2">
              <Input
                type="text"
                placeholder="Add prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-24"
              />
              <Button
                onClick={copyAllTags}
                className="flex items-center space-x-2"
              >
                {copiedStates["all"] ? <CopyCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>Copy All</span>
              </Button>
            </div>
            <div className="flex flex-wrap text-sm gap-2">
              {searchParams.labels.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className=" py-1 px-2 cursor-pointer"
                  onClick={() => copyToClipboard(`${prefix}${tag}`, index)}
                >
                  {copiedStates[index] ? (
                    <CopyCheck className="h-3 w-3 mr-1" />
                  ) : (
                    <Copy className="h-3 w-3 mr-1" />
                  )}
                  {prefix}{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}