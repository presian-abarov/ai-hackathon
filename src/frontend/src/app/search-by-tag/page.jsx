"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import Header from "../../components/header"
import { Search } from "../../components/search"
import overarchingResults from "@/data/overarchingResults.json"
import Link from 'next/link'

export default function SearchByTag() {
  const [loading, setLoading] = useState(false)
  const [filteredResults, setFilteredResults] = useState(overarchingResults)

  const allTags = new Set();
  overarchingResults.forEach((result) => {
    result.labels.forEach((tag) => {
      allTags.add(tag);
    });
  });

  const handleFilter = (tags) => {
    setLoading(true)
    const filteredResults = overarchingResults.filter((result) => {
      return tags.every((tag) => result.labels.includes(tag))
    })
    setFilteredResults(filteredResults)
    setLoading(false)
  }

  return (
    <div className="container mx-auto p-4 pt-0 space-y-4">
      <Header />
      <Search
        placeholder="Select tags"
        data={allTags}
        handleFilter={handleFilter}
      />
      <div className="border rounded-md" style={{ height: '60vh', overflowY: 'auto' }}>
        {filteredResults.map((data, index) => (
          <Link
            key={index}
            href={{
              pathname: '/classify-text',
              query: data
            }}
          >
            <div
              className="p-4 border-b flex flex-row justify-between items-center hover:bg-neutral-100 hover:cursor-pointer"
            >
              <p className="text-xs line-clamp-3 pr-8">{data.sequence}</p>
              <div className="flex gap-2 items-center">
                {data.labels.slice(0, 1).map((label, index) => (
                  <Badge key={`${index}`} variant="primary" className="hidden xs:inline bg-slate-200 sm:hidden h-fit">{label}</Badge>
                ))}
                {data.labels.slice(0, 2).map((label, index) => (
                  <Badge key={`${index}`} variant="primary" className="hidden sm:inline bg-slate-200 md:hidden h-fit">{label}</Badge>
                ))}
                {data.labels.slice(0, 3).map((label, index) => (
                  <Badge key={`${index}`} variant="primary" className="hidden md:inline bg-slate-200 lg:hidden h-fit">{label}</Badge>
                ))}
                {data.labels.slice(0, 6).map((label, index) => (
                  <Badge key={`${index}`} variant="primary" className="hidden lg:inline bg-slate-200 h-fit">{label}</Badge>
                ))}
                {data.labels.length > 4 && (
                  <Badge key={999} variant="primary" className="bg-slate-200 h-fit">+</Badge>
                )}
              </div>
            </div>
          </Link>
        ))}
        {loading && <div className="p-4 text-center">Loading...</div>}
      </div>
    </div>
  )
}