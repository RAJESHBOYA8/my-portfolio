import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-100 text-gray-900 min-h-screen p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Boya Rajesh</h1>
        <p className="text-lg mt-2">ServiceNow Developer | Frontend Enthusiast</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a passionate developer who enjoys working with ServiceNow and crafting responsive web experiences using frontend technologies like React.js and JavaScript. With a solid foundation in data structures and algorithms, I’m actively exploring how to combine my backend knowledge and frontend creativity to solve real-world problems.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
          <li>Python</li>
          <li>Java</li>
          <li>SQL / MySQL</li>
          <li>MongoDB</li>
          <li>DSA</li>
          <li>HTML, CSS, JavaScript</li>
          <li>React JS</li>
          <li>ServiceNow</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">ITOM Server Infrastructure Dashboard</h3>
            <p className="text-sm mt-2">Built a ServiceNow dashboard using CMDB data to visualize and monitor server infrastructure including OS, RAM, CPU, and disk distribution.</p>
            <p className="text-sm mt-1">Tech Stack: ServiceNow, CMDB, JavaScript</p>
            <a className="text-blue-600 underline" href="https://github.com/RAJESHBOYA8/ITOM_Server_Infrastructure_Dashboard" target="_blank">GitHub Repo</a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">E-Commerce Sales Report</h3>
            <p className="text-sm mt-2">Created an interactive Power BI dashboard to analyze e-commerce orders by category, region, and shipping mode.</p>
            <p className="text-sm mt-1">Tech Stack: Power BI</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://www.credly.com/badges/db98104a-0b26-4eb2-9f9d-8746a07f548a/linked_in_profile" className="text-blue-600 underline">IBM Generative AI for Data Analysts</a></li>
          <li><a href="https://www.credly.com/badges/30efcc1b-e5ac-4c79-89f8-b5098268a3f0/linked_in_profile" className="text-blue-600 underline">Google Data Analytics</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/records/9CHDW8AZ95WR" className="text-blue-600 underline">OOP in Java - UC San Diego</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/records/9CHDW8AZ95WR" className="text-blue-600 underline">Python - University of Michigan</a></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/mnt/data/My Resume-3 (1).pdf" download>
          <Button>Download Resume</Button>
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
        <div className="flex gap-4 items-center">
          <a href="https://www.linkedin.com/in/rajeshboya888/" target="_blank"><FaLinkedin size={28} /></a>
          <a href="https://github.com/RAJESHBOYA8" target="_blank"><FaGithub size={28} /></a>
          <a href="https://x.com/rajeshboya89" target="_blank"><FaTwitter size={28} /></a>
        </div>
        <p className="mt-4">Email: <a href="mailto:boyarajesh888@gmail.com" className="text-blue-600 underline">boyarajesh888@gmail.com</a></p>
      </section>
    </div>
  );
}
