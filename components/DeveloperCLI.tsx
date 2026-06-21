"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";

type LogItem = {
  id: string;
  type: "input" | "output";
  content: React.ReactNode;
  dir?: string;
};

export function DeveloperCLI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMac, setIsMac] = useState(false);
  const [currentDir, setCurrentDir] = useState("~");

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect OS for keyboard shortcuts hint
  useEffect(() => {
    setIsMac(typeof window !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  // Sync scroll to bottom when logs update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Focus input on mount/open
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      // Print welcome message if empty
      if (logs.length === 0) {
        setLogs([
          {
            id: "welcome",
            type: "output",
            content: (
              <div className="space-y-1 text-zinc-400 font-mono text-[11px] leading-relaxed">
                <p className="text-emerald-500 font-bold">visitor@shakir.dev:~$ initialize --interactive</p>
                <p className="text-zinc-500">----------------------------------------------------</p>
                <p>Welcome to Shakir Ansari&apos;s Interactive Developer Console (v1.0.0)</p>
                <p>Type <span className="text-emerald-400 font-bold">help</span> or <span className="text-emerald-400 font-bold">?</span> to view available terminal commands.</p>
                <p className="text-zinc-500">----------------------------------------------------</p>
              </div>
            ),
          },
        ]);
      }
    }
  }, [open, logs.length]);

  // Handle global shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with CMD+K / CTRL+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      // Toggle with backtick ` (except when typing in inputs)
      if (e.key === "`" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      // Close with Escape
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Block scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const printHelp = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-1 text-zinc-400 font-mono text-[11px]">
            <p className="text-zinc-200 font-semibold mb-1">Available Commands:</p>
            <p>  <span className="text-emerald-400 font-bold">help</span> / <span className="text-emerald-400 font-bold">?</span>    - Display this information menu</p>
            <p>  <span className="text-emerald-400 font-bold">about</span>       - Print general biography details</p>
            <p>  <span className="text-emerald-400 font-bold">skills</span>      - List core languages and tech stack</p>
            <p>  <span className="text-emerald-400 font-bold">projects</span>    - List deployed production projects</p>
            <p>  <span className="text-emerald-400 font-bold">go [target]</span> - Navigate to pages (e.g. &apos;go 1&apos;, &apos;go about&apos;)</p>
            <p>  <span className="text-emerald-400 font-bold">contact</span>     - View active social channels and links</p>
            <p>  <span className="text-emerald-400 font-bold">theme</span>       - Toggle website light / dark mode</p>
            <p>  <span className="text-emerald-400 font-bold">resume</span>      - Open / download curriculum vitae PDF</p>
            <p>  <span className="text-emerald-400 font-bold">clear</span>       - Clear all logs from console</p>
            <p>  <span className="text-emerald-400 font-bold">exit</span>        - Close developer console overlay</p>
          </div>
        ),
      },
    ]);
  };

  const printAbout = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-2 text-zinc-400 font-mono text-[11px] leading-relaxed">
            <p className="text-zinc-200 font-semibold">Shakir Ansari — Full-Stack Developer</p>
            <p>
              I design and build high-performance web platforms, REST APIs, cloud-hosted applications, and media services. 
              My focus is on speed, accessibility, and robust data integration architectures.
            </p>
            <p>
              Type <span className="text-emerald-400 font-bold">go about</span> to read the complete biography.
            </p>
          </div>
        ),
      },
    ]);
  };

  const printSkills = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-1 text-zinc-400 font-mono text-[11px]">
            <p className="text-zinc-200 font-semibold mb-1">Technical Stack Matrix:</p>
            <p>┌── <span className="text-sky-400 font-semibold">Frontend</span> ─── [ React · Next.js · TypeScript · Tailwind CSS · JavaScript ]</p>
            <p>├── <span className="text-emerald-400 font-semibold">Backend</span> ──── [ Node.js · Express.js · Python · Flask · REST APIs ]</p>
            <p>├── <span className="text-purple-400 font-semibold">Database</span> ─── [ MySQL · MongoDB · Firebase ]</p>
            <p>└── <span className="text-amber-400 font-semibold">DevOps</span> ───── [ AWS · Docker · Linux · Nginx · Cloudflare ]</p>
          </div>
        ),
      },
    ]);
  };

  const printProjects = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-2 text-zinc-400 font-mono text-[11px]">
            <p className="text-zinc-200 font-semibold">Deployed Engineering Projects:</p>
            <div className="space-y-1">
              <p>  <span className="text-emerald-400 font-bold">[1]</span> <span className="text-zinc-100 font-semibold">Terabox Gateway v2</span> - High-performance streaming API</p>
              <p>  <span className="text-emerald-400 font-bold">[2]</span> <span className="text-zinc-100 font-semibold">BCA Notes</span> - Academic notes hosting & community dashboard</p>
              <p>  <span className="text-emerald-400 font-bold">[3]</span> <span className="text-zinc-100 font-semibold">Teraplay</span> - Advanced video player & media indexer</p>
            </div>
            <p className="text-[10px] text-zinc-500 italic mt-1">
              Type <span className="text-emerald-400 font-bold">go [1-3]</span> or <span className="text-emerald-400 font-bold">go [slug]</span> to open details (e.g. &apos;go 1&apos;)
            </p>
          </div>
        ),
      },
    ]);
  };

  const handleGoCommand = (target: string) => {
    if (!target) {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-red-400 font-mono text-[11px]">Error: Please specify target. Usage: &apos;go [1-3]&apos;, &apos;go [slug]&apos;, or &apos;go [about/skills/contact/home]&apos;</span>,
        },
      ]);
      return;
    }

    const t = target.toLowerCase().trim();
    let path = "";

    if (t === "1" || t === "terabox" || t === "terabox-gateway") {
      path = "/projects/terabox-gateway";
    } else if (t === "2" || t === "bca" || t === "bca-notes") {
      path = "/projects/bca-notes";
    } else if (t === "3" || t === "teraplay") {
      path = "/projects/teraplay";
    } else if (t === "about") {
      path = "/about";
    } else if (t === "projects" || t === "work") {
      path = "/projects";
    } else if (t === "skills") {
      path = "/skills";
    } else if (t === "contact") {
      path = "/contact";
    } else if (t === "home" || t === "index" || t === "/") {
      path = "/";
    }

    if (path) {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-emerald-400 font-mono text-[11px]">Executing routing transition to {path}...</span>,
        },
      ]);
      setTimeout(() => {
        router.push(path);
        setOpen(false);
      }, 400);
    } else {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-red-400 font-mono text-[11px]">Error: Unknown routing destination: &apos;{target}&apos;. Try &apos;go 1&apos;, &apos;go about&apos;, &apos;go skills&apos;, or &apos;go contact&apos;</span>,
        },
      ]);
    }
  };

  const printContact = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-1 text-zinc-400 font-mono text-[11px]">
            <p className="text-zinc-200 font-semibold mb-1">Active Communication Channels:</p>
            <p>  Email    : <a href={`mailto:${siteConfig.email}`} className="text-emerald-400 underline font-semibold">{siteConfig.email}</a></p>
            <p>  GitHub   : <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-semibold">github.com/saahiyo</a></p>
            <p>  LinkedIn : <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-semibold">linkedin.com/in/shakir-ansari-362784296</a></p>
          </div>
        ),
      },
    ]);
  };

  const handleToggleTheme = () => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    
    // Sync React theme icons
    window.dispatchEvent(new Event("theme-change"));

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: <span className="text-zinc-200 font-mono text-[11px]">Theme switched successfully to {isLight ? "dark" : "light"} mode.</span>,
      },
    ]);
  };

  const handleDownloadResume = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: <span className="text-emerald-400 font-mono text-[11px]">Downloading curriculum vitae PDF...</span>,
      },
    ]);
    setTimeout(() => {
      window.open(siteConfig.resume, "_blank");
    }, 300);
  };

  const printWhoami = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: <span className="text-zinc-300 font-mono text-[11px]">visitor</span>,
      },
    ]);
  };

  const printLs = () => {
    if (currentDir === "~") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="flex flex-wrap gap-x-6 text-[11px] font-mono">
              <span className="text-sky-400">about.md</span>
              <span className="text-purple-400">contact.json</span>
              <span className="text-emerald-400 font-bold">projects/</span>
              <span className="text-sky-400">resume.pdf</span>
              <span className="text-sky-400">skills.txt</span>
            </div>
          ),
        },
      ]);
    } else if (currentDir === "~/projects") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="flex flex-wrap gap-x-6 text-[11px] font-mono text-sky-400">
              <span>1_terabox-gateway.md</span>
              <span>2_bca-notes.md</span>
              <span>3_teraplay.md</span>
            </div>
          ),
        },
      ]);
    }
  };

  const handleCdCommand = (dir: string) => {
    if (!dir) {
      setCurrentDir("~");
      return;
    }

    const d = dir.trim();

    if (d === "projects" || d === "projects/") {
      if (currentDir === "~") {
        setCurrentDir("~/projects");
      } else {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-red-400 font-mono text-[11px]">cd: projects: No such directory</span>,
          },
        ]);
      }
    } else if (d === ".." || d === "../") {
      if (currentDir === "~/projects") {
        setCurrentDir("~");
      } else {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-zinc-500 font-mono text-[11px]">cd: already at home directory</span>,
          },
        ]);
      }
    } else if (d === "~" || d === "home") {
      setCurrentDir("~");
    } else if (d === "/") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-yellow-400 font-mono text-[11px]">Permission denied: Cannot access absolute filesystem root (/). Mock redirected to home (~).</span>,
        },
      ]);
      setCurrentDir("~");
    } else {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-red-400 font-mono text-[11px]">cd: {dir}: No such file or directory</span>,
        },
      ]);
    }
  };

  const printContactJSON = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <pre className="text-zinc-300 font-mono text-[11px] leading-relaxed select-text">
            {"{"}
            {"\n"}  <span className="text-purple-400">&quot;name&quot;</span>: <span className="text-emerald-400">&quot;Shakir Ansari&quot;</span>,
            {"\n"}  <span className="text-purple-400">&quot;email&quot;</span>: <span className="text-emerald-400">&quot;shakir.ansarii075@gmail.com&quot;</span>,
            {"\n"}  <span className="text-purple-400">&quot;github&quot;</span>: <span className="text-emerald-400">&quot;https://github.com/saahiyo&quot;</span>,
            {"\n"}  <span className="text-purple-400">&quot;linkedin&quot;</span>: <span className="text-emerald-400">&quot;https://linkedin.com/in/shakir-ansari-362784296&quot;</span>
            {"\n"}{"}"}
          </pre>
        ),
      },
    ]);
  };

  const printProjectDetail = (slug: string) => {
    if (slug === "terabox") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="space-y-1.5 text-zinc-400 font-mono text-[11px] leading-relaxed">
              <p className="text-zinc-100 font-bold"># Terabox Gateway v2</p>
              <p>  - <span className="text-zinc-300 font-semibold">Category:</span> High-performance media resolver API</p>
              <p>  - <span className="text-zinc-300 font-semibold">Stack:</span> Next.js, Node.js, Cloudflare Workers</p>
              <p>  - <span className="text-zinc-300 font-semibold">Summary:</span> Resolves streaming media files, bypassing link restrictions in real-time with latency-based load balancing.</p>
              <p>Type <span className="text-emerald-400 font-bold">go 1</span> to read the complete project case study on-page.</p>
            </div>
          ),
        },
      ]);
    } else if (slug === "bca") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="space-y-1.5 text-zinc-400 font-mono text-[11px] leading-relaxed">
              <p className="text-zinc-100 font-bold"># BCA Notes</p>
              <p>  - <span className="text-zinc-300 font-semibold">Category:</span> Sharing web application & community dashboard</p>
              <p>  - <span className="text-zinc-300 font-semibold">Stack:</span> React, Firebase, Tailwind CSS</p>
              <p>  - <span className="text-zinc-300 font-semibold">Summary:</span> Academic resources aggregator platform for notes sharing, with full search indexing and collaborative moderation.</p>
              <p>Type <span className="text-emerald-400 font-bold">go 2</span> to read the complete project case study on-page.</p>
            </div>
          ),
        },
      ]);
    } else if (slug === "teraplay") {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="space-y-1.5 text-zinc-400 font-mono text-[11px] leading-relaxed">
              <p className="text-zinc-100 font-bold"># Teraplay</p>
              <p>  - <span className="text-zinc-300 font-semibold">Category:</span> Video player client & media indexer</p>
              <p>  - <span className="text-zinc-300 font-semibold">Stack:</span> Next.js, HLS, Custom Video Renderer</p>
              <p>  - <span className="text-zinc-300 font-semibold">Summary:</span> A unified media layout interface supporting adaptive streaming protocol playback and directory mapping.</p>
              <p>Type <span className="text-emerald-400 font-bold">go 3</span> to read the complete project case study on-page.</p>
            </div>
          ),
        },
      ]);
    }
  };

  const handleCatCommand = (fileName: string) => {
    if (!fileName) {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: <span className="text-red-400 font-mono text-[11px]">Usage: cat [filename]</span>,
        },
      ]);
      return;
    }

    const f = fileName.toLowerCase().trim();

    if (currentDir === "~") {
      if (f === "about.md" || f === "about") {
        printAbout();
      } else if (f === "skills.txt" || f === "skills") {
        printSkills();
      } else if (f === "contact.json" || f === "contact") {
        printContactJSON();
      } else if (f === "resume.pdf" || f === "resume") {
        handleDownloadResume();
      } else if (f === "projects" || f === "projects/") {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-zinc-400 font-mono text-[11px]">cat: projects: Is a directory. Try &apos;cd projects&apos; and then &apos;ls&apos;.</span>,
          },
        ]);
      } else {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-red-400 font-mono text-[11px]">cat: {fileName}: No such file or directory</span>,
          },
        ]);
      }
    } else if (currentDir === "~/projects") {
      if (f === "1_terabox-gateway.md" || f === "1" || f === "terabox") {
        printProjectDetail("terabox");
      } else if (f === "2_bca-notes.md" || f === "2" || f === "bca") {
        printProjectDetail("bca");
      } else if (f === "3_teraplay.md" || f === "3" || f === "teraplay") {
        printProjectDetail("teraplay");
      } else {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-red-400 font-mono text-[11px]">cat: {fileName}: No such file or directory</span>,
          },
        ]);
      }
    }
  };

  const printUname = (arg?: string) => {
    let output = "Linux";
    if (arg === "-a" || arg === "--all") {
      output = `Linux shakir-portfolio 6.8.0-1012-aws #14-Ubuntu SMP Sat Jun 20 2026 x86_64 x86_64 x86_64 GNU/Linux`;
    }
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: <span className="text-zinc-300 font-mono text-[11px]">{output}</span>,
      },
    ]);
  };

  const printDate = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: <span className="text-zinc-300 font-mono text-[11px]">{new Date().toString()}</span>,
      },
    ]);
  };

  const handlePingCommand = (target: string) => {
    const t = target ? target.trim() : "shakiransari.dev";
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-1 text-zinc-400 font-mono text-[11px]">
            <p className="text-zinc-300 font-semibold">PING {t} (185.199.108.153) 56(84) bytes of data.</p>
            <p>64 bytes from {t}: icmp_seq=1 ttl=56 time=12.4 ms</p>
            <p>64 bytes from {t}: icmp_seq=2 ttl=56 time=11.1 ms</p>
            <p>64 bytes from {t}: icmp_seq=3 ttl=56 time=14.3 ms</p>
            <p className="text-zinc-300 mt-1">--- {t} ping statistics ---</p>
            <p>3 packets transmitted, 3 received, 0% packet loss, time 2003ms</p>
            <p>rtt min/avg/max/mdev = 11.121/12.607/14.321/1.317 ms</p>
          </div>
        ),
      },
    ]);
  };

  const handleSudoCommand = (fullCmd: string) => {
    if (fullCmd.toLowerCase().includes("rm -rf")) {
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: "output",
          content: (
            <div className="space-y-1 font-mono text-[11px]">
              <p className="text-yellow-500 font-bold">WARNING: Attempting to delete Shakir&apos;s portfolio filesystem...</p>
              <p className="text-red-400">bash: rm: permission denied. Nice try!</p>
            </div>
          ),
        },
      ]);
      return;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "output",
        content: (
          <div className="space-y-1 font-mono text-[11px] text-zinc-400">
            <p className="text-zinc-300">[sudo] password for visitor: <span className="text-zinc-700 italic">(password hidden)</span></p>
            <p className="text-red-400 mt-1">visitor is not in the sudoers file. This incident will be reported.</p>
          </div>
        ),
      },
    ]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdStr = input.trim();
    if (!cmdStr) return;

    // Output raw command line
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: "input",
        content: cmdStr,
        dir: currentDir,
      },
    ]);

    // Save history
    const nextHistory = [cmdStr, ...history.filter((h) => h !== cmdStr)].slice(0, 50);
    setHistory(nextHistory);
    setHistoryIndex(-1);
    setInput("");

    const parts = cmdStr.split(" ").filter(Boolean);
    if (parts.length === 0) return;
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    switch (command) {
      case "help":
      case "?":
      case "menu":
        printHelp();
        break;
      case "clear":
      case "cls":
        setLogs([]);
        break;
      case "about":
        printAbout();
        break;
      case "skills":
        printSkills();
        break;
      case "projects":
        printProjects();
        break;
      case "contact":
        printContact();
        break;
      case "theme":
        handleToggleTheme();
        break;
      case "resume":
        handleDownloadResume();
        break;
      case "exit":
      case "close":
        setOpen(false);
        break;
      case "go":
        handleGoCommand(arg);
        break;
      // Basic Linux commands
      case "whoami":
        printWhoami();
        break;
      case "pwd":
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: <span className="text-zinc-300 font-mono text-[11px]">{currentDir === "~" ? "/home/visitor" : "/home/visitor/projects"}</span>,
          },
        ]);
        break;
      case "ls":
        printLs();
        break;
      case "cd":
        handleCdCommand(arg);
        break;
      case "cat":
        handleCatCommand(arg);
        break;
      case "uname":
        printUname(arg);
        break;
      case "date":
        printDate();
        break;
      case "ping":
        handlePingCommand(arg);
        break;
      case "sudo":
        handleSudoCommand(arg);
        break;
      default:
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: "output",
            content: (
              <span className="text-red-400 font-mono text-[11px]">
                Command not recognized: &apos;{command}&apos;. Type &apos;help&apos; to view all operations.
              </span>
            ),
          },
        ]);
    }
  };

  // Keyboard navigation for history
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < history.length) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Floating CLI Toggle Action Badge */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="cli-trigger"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-border-muted bg-surface-raised px-4 py-2 font-mono text-[11px] font-semibold text-text-primary shadow-3 hover:border-text-secondary/40 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            title="Open Developer Console"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Terminal{" "}
            <kbd className="hidden sm:inline-block rounded border border-border bg-background px-1 text-[9px] text-text-secondary leading-none">
              {isMac ? "⌘K" : "Ctrl+K"}
            </kbd>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Dialog Overlay Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop click to dismiss overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Console Body Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[480px] w-full max-w-2xl flex-col rounded-xl border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden font-mono"
            >
              {/* macOS style Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <span
                    onClick={() => setOpen(false)}
                    className="h-3 w-3 cursor-pointer rounded-full bg-[#ff5f56] transition-opacity hover:opacity-80"
                    title="Close"
                  />
                  <span
                    onClick={() => setLogs([])}
                    className="h-3 w-3 cursor-pointer rounded-full bg-[#ffbd2e] transition-opacity hover:opacity-80"
                    title="Clear screen"
                  />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] opacity-60" />
                </div>
                <div className="text-[10px] font-semibold text-zinc-500">
                  visitor@shakir-portfolio:~
                </div>
                <div className="w-12" /> {/* Spacer for symmetry */}
              </div>

              {/* Console logs output */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-zinc-800"
              >
                {logs.map((log) => (
                  <div key={log.id}>
                    {log.type === "input" ? (
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="text-emerald-500 font-bold">visitor@shakir.dev:{log.dir ?? "~"}$</span>
                        <span className="text-zinc-100">{log.content}</span>
                      </div>
                    ) : (
                      <div className="pl-0">{log.content}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Console Input Line Form */}
              <form
                onSubmit={handleCommandSubmit}
                className="flex items-center gap-2 border-t border-zinc-900 bg-zinc-950 px-4 py-3"
              >
                <span className="text-emerald-500 font-bold text-[11px] shrink-0">
                  visitor@shakir.dev:{currentDir}$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="flex-1 bg-transparent text-[11px] text-zinc-100 caret-emerald-500 selection:bg-emerald-500/30 w-full"
                  style={{ outline: "none", border: "none", boxShadow: "none" }}
                  placeholder="Type command here..."
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
