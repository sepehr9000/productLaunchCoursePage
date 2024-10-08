'use client'

import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Page() {
  const syllabus = [
    { week: 1, title: "How to Evaluate Ideas", slides: "/slides/week1" },
    { week: 2, title: "Idea Proposals & Team Formation", slides: "/slides/week2" },
    { week: 3, title: "User Interviews", slides: "/slides/week3" },
    { week: 4, title: "Scope & Plan MVP", slides: "/slides/week4" },
    { week: 5, title: "Wireframing + Simple UI", slides: "/slides/week5" },
    { week: 6, title: "Build a Landing Page", slides: "/slides/week6" },
    { week: 7, title: "Building Your Waitlist / Marketing", slides: "/slides/week7" },
    { week: 8, title: "Build Week", slides: "/slides/week8" },
    { week: 9, title: "Build Week", slides: "/slides/week9" },
    { week: 10, title: "Build Week", slides: "/slides/week10" },
    { week: 11, title: "Launch / Marketing", slides: "/slides/week11" },
    { week: 12, title: "Pitch Decking", slides: "/slides/week12" },
    { week: 13, title: "Dry Runs", slides: "/slides/week13" },
    { week: 14, title: "Final Presentations", slides: "/slides/week14" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-800">Product Launch Course</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Course Summary</h2>
            <p className="text-gray-700 mb-4">
              This 14-week course is designed to guide you through the entire process of launching a successful product. 
              From idea evaluation to final pitch presentations, you&apos;ll learn essential skills in product development, 
              user research, MVP creation, marketing, and pitching to investors.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Duration: 14 weeks</li>
              <li>Format: Weekly sessions with hands-on projects</li>
              <li>Key Topics: Idea evaluation, user interviews, MVP development, marketing strategies, and pitch deck creation</li>
              <li>Final Project: Launch a real product and present to potential investors</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-800">Course Syllabus</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-purple-700">Week</TableHead>
                  <TableHead className="text-purple-700">Title</TableHead>
                  <TableHead className="w-[150px] text-purple-700">Slides</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {syllabus.map((week) => (
                  <TableRow key={week.week} className="hover:bg-purple-50">
                    <TableCell className="font-medium text-purple-600">Week {week.week}</TableCell>
                    <TableCell>{week.title}</TableCell>
                    <TableCell>
                      <Link 
                        href={week.slides} 
                        className="text-pink-500 hover:text-pink-700 hover:underline transition-colors duration-200"
                      >
                        View Slides
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}