"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-24 pb-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-golden-300 to-golden-200 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-golden-300 mx-auto rounded-full mt-4"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              We would love to hear from you. Reach out for collaborations, queries, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-golden-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:ecell@cgc.edu.in" className="text-white hover:text-golden-300">ecell@cgc.edu.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-golden-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+910000000000" className="text-white hover:text-golden-300">+91 00000 00000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-golden-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">E-Cell, CGC COE, Landran, Mohali, Punjab, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Name</label>
                  <Input placeholder="Your name" className="bg-black text-white border-gray-700" />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Email</label>
                  <Input type="email" placeholder="you@example.com" className="bg-black text-white border-gray-700" />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Message</label>
                  <Textarea placeholder="Your message" className="bg-black text-white border-gray-700 min-h-[140px]" />
                </div>
                <Button type="submit" className="bg-golden-300 text-black hover:bg-golden-200">
                  Send Message <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
