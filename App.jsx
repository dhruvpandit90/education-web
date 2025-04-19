import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Welcome to EduStream</h1>
    <p className="text-lg mb-6">Free & premium study material with video lectures and notes.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Free Videos</h2>
          <p>Explore sample lectures without login.</p>
          <Link to="/videos"><Button className="mt-2">Watch Now</Button></Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Notes</h2>
          <p>Download free PDFs for various subjects.</p>
          <Link to="/notes"><Button className="mt-2">Download</Button></Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Premium Access</h2>
          <p>Login to access full courses and advanced notes.</p>
          <Link to="/login"><Button className="mt-2">Login</Button></Link>
        </CardContent>
      </Card>
    </div>
  </div>
);

const Videos = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Sample Video Lectures</h1>
    <video controls className="w-full rounded-xl shadow-lg">
      <source src="/sample-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Notes = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Download Notes</h1>
    <ul className="list-disc pl-6">
      <li><a href="/notes/physics.pdf" className="text-blue-600">Physics Notes</a></li>
      <li><a href="/notes/chemistry.pdf" className="text-blue-600">Chemistry Notes</a></li>
      <li><a href="/notes/math.pdf" className="text-blue-600">Math Notes</a></li>
    </ul>
  </div>
);

const Login = () => (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
    <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" />
    <Button className="w-full">Login</Button>
  </div>
);

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">EduStream</Link>
    <div className="space-x-4">
      <Link to="/videos">Videos</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
