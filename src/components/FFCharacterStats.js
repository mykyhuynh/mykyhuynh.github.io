import React from 'react';
import { Sword, Zap, Star, ArrowRight } from 'lucide-react';

const FFCharacterStats = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono p-5">
      {/* Main Stats */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white border-2 border-blue-400 rounded-lg">
        <div className="p-6">
          <div className="border-b-2 border-blue-400 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">CHARACTER STATS</h2>
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">Name</span>
                <span className="text-white">meekee</span>
              </div>
              <div>
                <span className="text-blue-400">Class</span>
                <span className="ml-2">Human Developer</span>
              </div>
              <div>
                <span className="text-blue-400">Level</span>
                <span className="ml-2">???</span>
              </div>
              <div>
                <span className="text-blue-400">Job Points</span>
                <span className="ml-2">9999</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl text-blue-200 mb-4">ATTRIBUTES</h3>
          <div className="space-y-3">
            <div className="border-l-2 border-blue-400 pl-4">
              <h4 className="text-blue-200 flex items-center gap-2">
                <Sword className="text-blue-400 w-4 h-4" />
                Development
              </h4>
              <div className="text-blue-100 mt-1 space-y-1 text-sm">
                <p>• Low-Level: Java, C, C++</p>
                <p>• Web Stack: HTML, CSS, JavaScript</p>
                <p>• Frameworks: React, Vue</p>
              </div>
            </div>

            <div className="border-l-2 border-blue-400 pl-4">
              <h4 className="text-blue-200 flex items-center gap-2">
                <Zap className="text-blue-400 w-4 h-4" />
                Creative Arts
              </h4>
              <div className="text-blue-100 mt-1 space-y-1 text-sm">
                <p>• Graphics: OpenGL, Unity, Unreal Engine 4, Blender</p>
                <p>• Arts: Oil, acrylic, charcoal, Procreate, Adobe Suite</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment & Skills */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white border-2 border-blue-400 rounded-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-200 mb-6">EQUIPMENT & SKILLS</h2>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <h3 className="text-xl text-blue-200 mb-3">EQUIPPED SKILLS</h3>
              <div className="space-y-2">
                {[
                  "Agile Iterations",
                  "WCAG Expertise",
                  "Design Thinking",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-blue-100">
                    <ArrowRight className="text-blue-400 w-4 h-4" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-blue-200 mb-3">LIMIT BREAKS</h3>
              <div className="space-y-2">
                {[
                  "Full-Stack Burst",
                  "Ultimate User Flow"
                ].map((ability, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <span className="text-yellow-100">{ability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className='mt-6'>
              <h3 className="text-xl text-blue-200 mb-3">MATERIA</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Fire and Ice", color: "bg-green-400" },
                  { name: "Skill Master", color: "bg-purple-400" },
                  { name: "Magic Efficiency", color: "bg-blue-400" },
                  { name: "Chocobo & Moogle", color: "bg-red-400" }
                ].map((materia, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${materia.color}`} />
                    <span className="text-blue-100">{materia.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFCharacterStats;