"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Entrepreneurship in India",
      excerpt: "Exploring the emerging trends and opportunities in the Indian startup ecosystem...",
      author: "E-Cell Team",
      date: "Jan 15, 2024",
      image: "/Insights.png",
      category: "Insights",
    },
    {
      title: "How to Build a Successful Startup Team",
      excerpt: "Key strategies for assembling and managing a high-performing startup team...",
      author: "Sarang Alhawat",
      date: "Jan 10, 2024",
      image: "/Tips.png",
      category: "Tips",
    },
    {
      title: "Funding Your Startup: A Complete Guide",
      excerpt: "Navigate the complex world of startup funding with our comprehensive guide...",
      author: "Aashi Raghuwanshi",
      date: "Jan 5, 2024",
      image: "/Finance.png",
      category: "Finance",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8 flex justify-center">
            <span className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-black">Latest Blog Posts</h2>
              <span className="block h-1 bg-yellow-400 rounded-full mt-3"></span>
            </span>
          </div>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and stories from the entrepreneurial world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="bg-white border-black hover:border-yellow-400 transition-all duration-300 h-full overflow-hidden">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={index === 0}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Read All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
