'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Users, BarChart3, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero section */}
        <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-1/4 w-96 h-96 bg-[color:var(--brand-primary)]/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, 50, 0], 
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/4 w-64 h-64 bg-[color:var(--brand-secondary)]/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -30, 0], 
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <Badge variant="outline" className="mb-6 py-1.5 px-4 text-sm font-medium">
                    🚀 The #1 Influencer Marketing Platform
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Connecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">creators</span> with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-secondary)] to-[color:var(--brand-accent)]">brands</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  The ultimate platform for influencer marketing. Connect, collaborate, and create impactful campaigns that resonate with your audience.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
                    <Link href="/signup?type=brand">
                      I'm a brand <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                    <Link href="/signup?type=creator">
                      I'm a creator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-primary)]" />
                    <span>10,000+ Creators</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-primary)]" />
                    <span>2,500+ Brands</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-primary)]" />
                    <span>Free to join</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] rounded-2xl blur-md opacity-70" />
                  <div className="relative bg-card border shadow-lg rounded-xl overflow-hidden aspect-[4/3]">
                    {/* Platform mockup - replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-[color:var(--brand-accent)]/10 flex items-center justify-center p-8">
                      <div className="w-full h-full bg-card border rounded-lg flex flex-col">
                        <div className="border-b p-3 flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[color:var(--brand-primary)]/30" />
                          <div className="w-3 h-3 rounded-full bg-[color:var(--brand-secondary)]/30" />
                          <div className="w-3 h-3 rounded-full bg-[color:var(--brand-accent)]/30" />
                          <div className="w-full h-4 bg-muted rounded-full ml-2" />
                        </div>
                        <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                          <div className="bg-muted rounded-md p-2">
                            <div className="w-full h-4 bg-background rounded-full mb-2" />
                            <div className="w-2/3 h-3 bg-background rounded-full mb-4" />
                            <div className="w-full h-24 bg-background rounded-md" />
                          </div>
                          <div className="bg-muted rounded-md p-2">
                            <div className="w-full h-4 bg-background rounded-full mb-2" />
                            <div className="w-1/2 h-3 bg-background rounded-full mb-4" />
                            <div className="w-full h-24 bg-background rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-20 py-8 px-6 bg-muted/50 rounded-xl border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-medium mb-2">Trusted by leading brands and creators</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* Replace with actual brand logos */}
                {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand, i) => (
                  <div key={i} className="text-muted-foreground font-medium">{brand}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 right-0 w-72 h-72 bg-[color:var(--brand-accent)]/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -40, 0], 
                y: [0, 20, 0],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <Star className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why choose Levelz?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform offers cutting-edge tools to streamline influencer marketing campaigns from start to finish.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 border transition-all duration-300 hover:shadow-md hover:border-[color:var(--brand-primary)]/30 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-primary)]/5 to-[color:var(--brand-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="mb-6 p-3 rounded-full w-14 h-14 flex items-center justify-center bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)] relative">
                      {item.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[color:var(--brand-primary)]/20"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[color:var(--brand-primary)] transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    
                    <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                      <span className="text-sm font-medium text-[color:var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                      </span>
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-[color:var(--brand-primary)]/10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="h-4 w-4 text-[color:var(--brand-primary)]" />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 pt-16 border-t border-border/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <motion.div 
                  className="mx-auto mb-4 w-16 h-16 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="h-8 w-8 text-[color:var(--brand-primary)]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Active creators on the platform</p>
              </div>
              
              <div className="p-6">
                <motion.div 
                  className="mx-auto mb-4 w-16 h-16 rounded-full bg-[color:var(--brand-secondary)]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <BarChart3 className="h-8 w-8 text-[color:var(--brand-secondary)]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">$12M+</h3>
                <p className="text-muted-foreground">Generated for creators</p>
              </div>
              
              <div className="p-6">
                <motion.div 
                  className="mx-auto mb-4 w-16 h-16 rounded-full bg-[color:var(--brand-accent)]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="h-8 w-8 text-[color:var(--brand-accent)]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">2,500+</h3>
                <p className="text-muted-foreground">Successful campaigns</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute bottom-1/4 left-0 w-80 h-80 bg-[color:var(--brand-primary)]/5 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0], 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-[color:var(--brand-primary)]"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 8H8"/><path d="M21 12H8"/><path d="M21 16H8"/><path d="M4 8h.01"/><path d="M4 12h.01"/><path d="M4 16h.01"/></svg>
                Platform Tour
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful tools, simple interface</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create, manage, and analyze your influencer marketing campaigns
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Campaign Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  Get a complete overview of all your campaigns in one place. Track performance metrics, manage creator relationships, and optimize your strategy.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Real-time performance metrics",
                    "Content approval workflow",
                    "Budget tracking and allocation",
                    "Automated reporting"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-[color:var(--brand-primary)]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href="#">
                      <span>See dashboard demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] rounded-2xl blur opacity-30" />
                <div className="relative bg-card border shadow-lg rounded-xl overflow-hidden">
                  {/* Platform screenshot - replace with actual image */}
                  <div className="bg-gradient-to-br from-[color:var(--brand-primary)]/5 to-[color:var(--brand-accent)]/5 aspect-[16/9]">
                    <div className="w-full h-full bg-card rounded-lg p-6">
                      {/* Dashboard mockup */}
                      <div className="w-full h-full border rounded-lg overflow-hidden flex flex-col">
                        <div className="bg-muted border-b p-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex space-x-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-400" />
                              <div className="w-3 h-3 rounded-full bg-yellow-400" />
                              <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="w-40 h-4 bg-muted-foreground/20 rounded-full" />
                          </div>
                          <div className="w-32 h-4 bg-muted-foreground/20 rounded-full" />
                        </div>
                        <div className="flex-1 grid grid-cols-4 gap-3 p-4">
                          <div className="col-span-1 space-y-3">
                            <div className="w-full h-8 bg-muted-foreground/10 rounded-md" />
                            <div className="w-full h-8 bg-muted-foreground/10 rounded-md" />
                            <div className="w-full h-8 bg-[color:var(--brand-primary)]/20 rounded-md" />
                            <div className="w-full h-8 bg-muted-foreground/10 rounded-md" />
                            <div className="w-full h-8 bg-muted-foreground/10 rounded-md" />
                          </div>
                          <div className="col-span-3 space-y-4">
                            <div className="flex justify-between">
                              <div className="w-32 h-6 bg-muted-foreground/10 rounded-md" />
                              <div className="w-24 h-6 bg-[color:var(--brand-primary)]/20 rounded-md" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-card border rounded-md p-3 space-y-2">
                                <div className="w-12 h-12 rounded-full bg-[color:var(--brand-primary)]/20 mx-auto flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[color:var(--brand-primary)]/50 rounded-full" />
                                </div>
                                <div className="w-16 h-4 bg-muted-foreground/20 rounded-full mx-auto" />
                                <div className="w-10 h-6 bg-muted-foreground/10 rounded-full mx-auto" />
                              </div>
                              <div className="bg-card border rounded-md p-3 space-y-2">
                                <div className="w-12 h-12 rounded-full bg-[color:var(--brand-secondary)]/20 mx-auto flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[color:var(--brand-secondary)]/50 rounded-full" />
                                </div>
                                <div className="w-16 h-4 bg-muted-foreground/20 rounded-full mx-auto" />
                                <div className="w-10 h-6 bg-muted-foreground/10 rounded-full mx-auto" />
                              </div>
                              <div className="bg-card border rounded-md p-3 space-y-2">
                                <div className="w-12 h-12 rounded-full bg-[color:var(--brand-accent)]/20 mx-auto flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[color:var(--brand-accent)]/50 rounded-full" />
                                </div>
                                <div className="w-16 h-4 bg-muted-foreground/20 rounded-full mx-auto" />
                                <div className="w-10 h-6 bg-muted-foreground/10 rounded-full mx-auto" />
                              </div>
                            </div>
                            <div className="w-full h-32 bg-muted-foreground/10 rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--brand-secondary)] to-[color:var(--brand-accent)] rounded-2xl blur opacity-30" />
                <div className="relative bg-card border shadow-lg rounded-xl overflow-hidden">
                  {/* Analytics screenshot - replace with actual image */}
                  <div className="bg-gradient-to-br from-[color:var(--brand-secondary)]/5 to-[color:var(--brand-accent)]/5 aspect-[16/9]">
                    <div className="w-full h-full bg-card rounded-lg p-6">
                      {/* Analytics mockup */}
                      <div className="w-full h-full border rounded-lg overflow-hidden flex flex-col">
                        <div className="bg-muted border-b p-3 flex items-center gap-4">
                          <div className="w-32 h-5 bg-muted-foreground/20 rounded-full" />
                          <div className="w-24 h-5 bg-muted-foreground/10 rounded-full" />
                          <div className="w-28 h-5 bg-muted-foreground/10 rounded-full" />
                        </div>
                        <div className="flex-1 p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="w-48 h-6 bg-muted-foreground/20 rounded-md" />
                            <div className="flex gap-2">
                              <div className="w-24 h-8 bg-muted-foreground/10 rounded-md" />
                              <div className="w-24 h-8 bg-[color:var(--brand-accent)]/20 rounded-md" />
                            </div>
                          </div>
                          <div className="w-full h-64 bg-muted-foreground/5 rounded-lg p-4">
                            <div className="w-full h-full flex items-end justify-between gap-2">
                              <div className="w-1/12 h-[30%] bg-[color:var(--brand-primary)]/30 rounded-t-md" />
                              <div className="w-1/12 h-[45%] bg-[color:var(--brand-primary)]/40 rounded-t-md" />
                              <div className="w-1/12 h-[60%] bg-[color:var(--brand-primary)]/50 rounded-t-md" />
                              <div className="w-1/12 h-[40%] bg-[color:var(--brand-primary)]/40 rounded-t-md" />
                              <div className="w-1/12 h-[70%] bg-[color:var(--brand-primary)]/60 rounded-t-md" />
                              <div className="w-1/12 h-[80%] bg-[color:var(--brand-primary)]/70 rounded-t-md" />
                              <div className="w-1/12 h-[75%] bg-[color:var(--brand-primary)]/65 rounded-t-md" />
                              <div className="w-1/12 h-[90%] bg-[color:var(--brand-primary)]/80 rounded-t-md" />
                              <div className="w-1/12 h-[55%] bg-[color:var(--brand-primary)]/50 rounded-t-md" />
                              <div className="w-1/12 h-[65%] bg-[color:var(--brand-primary)]/60 rounded-t-md" />
                              <div className="w-1/12 h-[100%] bg-[color:var(--brand-primary)] rounded-t-md" />
                              <div className="w-1/12 h-[85%] bg-[color:var(--brand-primary)]/70 rounded-t-md" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Make data-driven decisions with our comprehensive analytics suite. Understand your campaign performance and optimize for better results.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Audience demographics breakdown",
                    "Engagement rate analysis",
                    "ROI calculation and reporting",
                    "Performance benchmarking"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[color:var(--brand-secondary)]/10 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-[color:var(--brand-secondary)]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href="#">
                      <span>View analytics features</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section id="how-it-works" className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute top-0 right-1/3 w-80 h-80 bg-[color:var(--brand-primary)]/5 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0], 
                y: [0, 30, 0],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From sign-up to successful campaign in four easy steps
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-12 relative">
                  {/* Connecting line */}
                  <div className="absolute left-5 top-12 bottom-8 w-0.5 bg-gradient-to-b from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] opacity-30" />
                  
                  {workflowSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-6 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] text-primary-foreground flex items-center justify-center font-bold z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                        <motion.div 
                          className="mt-4 flex items-center gap-2 text-sm text-[color:var(--brand-primary)] font-medium cursor-pointer"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span>Learn more</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] rounded-2xl blur-md opacity-30" />
                <Card className="relative border overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-[color:var(--brand-accent)]/10 p-6">
                    <div className="w-full h-full border rounded-lg flex flex-col overflow-hidden">
                      {/* Mockup header */}
                      <div className="bg-card border-b p-3 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[color:var(--brand-primary)]/30" />
                        <div className="w-3 h-3 rounded-full bg-[color:var(--brand-secondary)]/30" />
                        <div className="w-3 h-3 rounded-full bg-[color:var(--brand-accent)]/30" />
                        <div className="w-full h-4 bg-muted rounded-full ml-2" />
                      </div>
                      
                      {/* Mockup content */}
                      <div className="flex-1 p-4 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-muted"></div>
                          <div>
                            <div className="w-32 h-3 bg-muted rounded-full mb-1"></div>
                            <div className="w-20 h-2 bg-muted/50 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          <div className="bg-muted/30 rounded-lg p-3">
                            <div className="w-full h-4 bg-muted rounded-full mb-2"></div>
                            <div className="w-3/4 h-3 bg-muted rounded-full mb-3"></div>
                            <div className="w-full h-28 bg-muted rounded-md"></div>
                            <div className="w-1/2 h-6 bg-[color:var(--brand-primary)]/20 rounded-full mt-3 ml-auto"></div>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-3">
                            <div className="w-full h-4 bg-muted rounded-full mb-2"></div>
                            <div className="w-2/3 h-3 bg-muted rounded-full mb-3"></div>
                            <div className="w-full h-28 bg-muted rounded-md"></div>
                            <div className="w-1/2 h-6 bg-[color:var(--brand-primary)]/20 rounded-full mt-3 ml-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card shadow-lg border rounded-full px-5 py-2 flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-[color:var(--brand-primary)]"
                  />
                  <span className="text-sm font-medium">Platform Demo</span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Additional call to action */}
            <motion.div 
              className="mt-24 p-8 border rounded-xl bg-muted/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Ready to grow your brand or influence?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join thousands of creators and brands already using Levelz to create successful campaigns.
              </p>
              <Button className="h-11 px-8 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
                <Link href="/signup">
                  Get started for free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials section */}
        <section id="testimonials" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/40 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-1/4 w-96 h-96 bg-[color:var(--brand-accent)]/5 rounded-full blur-3xl"
              animate={{ 
                x: [0, 40, 0], 
                y: [0, -30, 0],
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <Star className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What our users say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it — hear from some of our amazing customers
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 border relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-transparent rounded-bl-full" />
                    
                    <div className="mb-6 relative z-10">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[color:var(--brand-primary)] text-[color:var(--brand-primary)]" />
                        ))}
                      </div>
                      <p className="italic text-muted-foreground">{testimonial.quote}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                        {/* Replace with actual avatar image */}
                        <div className="w-full h-full bg-gradient-to-br from-[color:var(--brand-primary)]/30 to-[color:var(--brand-secondary)]/30" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing section placeholder */}
        <section id="pricing" className="py-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that's right for you and your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${plan.featured ? 'relative z-10' : ''}`}
                >
                  <Card className={`h-full p-6 border relative overflow-hidden ${plan.featured ? 'scale-105 shadow-lg' : ''}`}>
                    {plan.featured && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-primary)]/5 to-[color:var(--brand-secondary)]/5" />
                    )}
                    {plan.featured && (
                      <Badge className="absolute top-4 right-4 bg-[color:var(--brand-primary)]">Popular</Badge>
                    )}
                    
                    <div className="mb-6 relative z-10">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-3xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground ml-1">/{plan.billingCycle}</span>
                      </div>
                      <Button 
                        className={`w-full ${plan.featured ? 'bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity' : ''}`}
                        variant={plan.featured ? 'default' : 'outline'} 
                        asChild
                      >
                        <Link href={`/signup?plan=${plan.id}`}>
                          {plan.buttonText}
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="space-y-3 mt-8 relative z-10">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[color:var(--brand-primary)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
            <motion.div 
              className="absolute inset-0 bg-grid-white/10"
              style={{ backgroundSize: '30px 30px' }}
              animate={{ x: [0, 10], y: [0, 10] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to take your influencer marketing to the next level?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of creators and brands already using Levelz to create successful campaigns.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" variant="secondary" className="h-12 px-8 bg-white text-[color:var(--brand-primary)] hover:bg-white/90" asChild>
                <Link href="/signup">
                  Get started for free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">
                  Contact sales
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about the product and billing
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 md:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-[color:var(--brand-primary)]/5 rounded-full blur-3xl"
              animate={{ 
                x: [0, -40, 0], 
                y: [0, 30, 0],
              }}
              transition={{ 
                duration: 22, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <Star className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Benefits
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Value for everyone</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for both brands and creators to maximize their influencer marketing potential
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border overflow-hidden relative p-6 md:p-8">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-transparent rounded-bl-full -z-10" />
                  
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-primary)]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">For Brands</h3>
                    <p className="text-muted-foreground mb-6">Find the perfect creators to represent your brand and drive authentic engagement with your target audience.</p>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      {
                        title: "Find the Perfect Match",
                        description: "Connect with creators who align with your brand values and have the right audience demographics."
                      },
                      {
                        title: "Manage Campaigns with Ease",
                        description: "Streamline your workflow with our intuitive campaign management tools and automated processes."
                      },
                      {
                        title: "Measure Real Impact",
                        description: "Track performance metrics and ROI to optimize your influencer marketing strategy."
                      },
                      {
                        title: "Scale Your Efforts",
                        description: "Manage multiple campaigns and creator relationships all from a single dashboard."
                      }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="border-b border-border/50 pb-5 last:border-0 last:pb-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex gap-3">
                          <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[color:var(--brand-primary)]/10 flex items-center justify-center">
                            <CheckCircle2 className="h-3 w-3 text-[color:var(--brand-primary)]" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
                      <Link href="/signup?type=brand">
                        Join as a Brand <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border overflow-hidden relative p-6 md:p-8">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[color:var(--brand-secondary)]/10 to-transparent rounded-bl-full -z-10" />
                  
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-[color:var(--brand-secondary)]/10 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--brand-secondary)]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">For Creators</h3>
                    <p className="text-muted-foreground mb-6">Showcase your talent, connect with brands that align with your values, and grow your career as a content creator.</p>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      {
                        title: "Build Your Portfolio",
                        description: "Showcase your best work and highlight your unique style to attract the right brand partnerships."
                      },
                      {
                        title: "Find Relevant Opportunities",
                        description: "Get matched with brands that align with your audience and content style."
                      },
                      {
                        title: "Manage Multiple Partnerships",
                        description: "Streamline communications and content approvals all in one place."
                      },
                      {
                        title: "Grow Your Revenue",
                        description: "Secure better deals with transparent pricing and payment processing."
                      }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="border-b border-border/50 pb-5 last:border-0 last:pb-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex gap-3">
                          <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[color:var(--brand-secondary)]/10 flex items-center justify-center">
                            <CheckCircle2 className="h-3 w-3 text-[color:var(--brand-secondary)]" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-to-r from-[color:var(--brand-secondary)] to-[color:var(--brand-accent)] hover:opacity-90 transition-opacity" asChild>
                      <Link href="/signup?type=creator">
                        Join as a Creator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xl mb-6">Join the growing community of creators and brands on Levelz</p>
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
                  <Link href="/signup">
                    Get Started For Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog/Resources Preview Section */}
        <section className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-[color:var(--brand-primary)]"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                Resources
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Learn and grow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the latest insights, tips, and strategies for influencer marketing success
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "10 Ways to Measure Influencer Marketing ROI",
                  excerpt: "Learn how to track and measure the true impact of your influencer campaigns beyond just likes and comments.",
                  category: "Strategy",
                  image: "bg-[color:var(--brand-primary)]/10"
                },
                {
                  title: "How to Create a Winning Influencer Brief",
                  excerpt: "Discover the key elements that should be included in every influencer brief to ensure campaign success.",
                  category: "Tips",
                  image: "bg-[color:var(--brand-secondary)]/10"
                },
                {
                  title: "The Future of Influencer Marketing: Trends to Watch",
                  excerpt: "Stay ahead of the curve with these emerging trends that are shaping the future of influencer marketing.",
                  category: "Insights",
                  image: "bg-[color:var(--brand-accent)]/10"
                }
              ].map((article, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-md">
                    <div className={`aspect-[16/9] ${article.image} flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-muted">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">5 min read</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--brand-primary)] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-muted"/>
                          <span className="text-sm">Levelz Team</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                          <Link href="#">
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/blog">
                  <span>View all resources</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-4 md:px-6 lg:px-8 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
                  levelz
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-xs">
                The ultimate platform for influencer marketing. Connect, collaborate, and create impactful campaigns.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Levelz. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const featureItems = [
  {
    title: "Intelligent Matching",
    description: "Our AI-powered algorithm connects brands with the perfect creators based on audience demographics, engagement rates, and content style.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" /><circle cx="12" cy="12" r="11" /></svg>,
  },
  {
    title: "Performance Analytics",
    description: "Track campaign performance in real-time with comprehensive analytics dashboards showing engagement, reach, and ROI metrics.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
  },
  {
    title: "Seamless Collaboration",
    description: "Built-in messaging, content approval workflows, and payment processing make creator-brand collaboration smooth and efficient.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></svg>,
  },
  {
    title: "Content Portfolio",
    description: "Creators can showcase their best work with a customizable portfolio that highlights their style, reach, and previous campaign successes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>,
  },
  {
    title: "Budget Management",
    description: "Set campaign budgets, manage creator payments, and track expenses all in one place with transparent pricing.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>,
  },
  {
    title: "Social Integration",
    description: "Connect your social media accounts to automatically import metrics and content, making profile setup and campaign reporting effortless.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>,
  },
];

const workflowSteps = [
  {
    title: "Create your profile",
    description: "Sign up and build your brand or creator profile with your portfolio, audience demographics, and metrics.",
  },
  {
    title: "Discover opportunities",
    description: "Brands create campaigns with specific requirements, while creators browse opportunities that match their audience and content style.",
  },
  {
    title: "Connect and collaborate",
    description: "Our intelligent matching system connects the right brands with the right creators, and our platform facilitates seamless communication.",
  },
  {
    title: "Create and measure impact",
    description: "Launch campaigns, track performance metrics in real-time, and measure ROI with comprehensive analytics dashboards.",
  },
];

const testimonials = [
  {
    quote: "Levelz has transformed how we run influencer campaigns. The platform's analytics have helped us achieve a 3x ROI on our marketing spend.",
    name: "Sarah Johnson",
    role: "Marketing Director at StyleBrand"
  },
  {
    quote: "As a content creator, Levelz has connected me with brands that align perfectly with my audience. The collaboration tools make the whole process seamless.",
    name: "Mark Williams",
    role: "Lifestyle Creator, 500K+ followers"
  },
  {
    quote: "We've tried several influencer platforms, but Levelz stands out with its intelligent matching algorithm and comprehensive analytics dashboard.",
    name: "Lisa Thompson",
    role: "CMO at TechInnovate"
  }
];

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small brands",
    price: "0",
    billingCycle: "month",
    buttonText: "Get started",
    features: [
      "Up to 5 campaign connections",
      "Basic analytics dashboard",
      "Email support",
      "Content approval workflow"
    ],
    featured: false
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for growing brands and creators",
    price: "49",
    billingCycle: "month",
    buttonText: "Get started",
    features: [
      "Unlimited campaign connections",
      "Advanced analytics dashboard",
      "Priority support",
      "Contract management",
      "Campaign ROI tracking"
    ],
    featured: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large brands and agencies",
    price: "199",
    billingCycle: "month",
    buttonText: "Contact sales",
    features: [
      "Unlimited campaign connections",
      "Custom analytics and reporting",
      "Dedicated account manager",
      "API access",
      "White-label solutions",
      "Team collaboration tools"
    ],
    featured: false
  }
];

const faqs = [
  {
    question: "How does Levelz match brands with creators?",
    answer: "Our AI-powered algorithm analyzes creator content, audience demographics, engagement rates, and brand requirements to suggest the most relevant matches for your campaign goals."
  },
  {
    question: "Can I use Levelz for free?",
    answer: "Yes! We offer a free Starter plan that includes basic features for individuals and small brands to get started with influencer marketing."
  },
  {
    question: "How do payments work on the platform?",
    answer: "Levelz provides secure payment processing between brands and creators. Payments are held in escrow until content is approved, ensuring both parties are protected."
  },
  {
    question: "What analytics do you provide?",
    answer: "Our analytics dashboard tracks engagement, reach, conversions, ROI, audience demographics, and content performance to help you measure the success of your campaigns."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing cycle."
  }
];
