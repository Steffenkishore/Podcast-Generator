import { useState } from "react";
import { postData } from "../service/postData.service";
import DotLoader from "./DotLoader";
import { FaPodcast, FaPlayCircle, FaFileAlt, FaMagic } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const statusValues = {
  success: "success",
  failed: "failed",
  loading: "loading",
  initial: "initial",
};

const Podcast = () => {
  const [text, setText] = useState<string | undefined>();
  const [status, setStatus] = useState(statusValues.initial);
  const [err, setErr] = useState<string | null>();
  const [script, setScript] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [viewScript, setViewScript] = useState<boolean>(false);

  const handleSendData = async (): Promise<void> => {
    if (text !== undefined) {
      setStatus(statusValues.loading);
      try {
        const response = await postData(text);
        setScript(response.data.script);
        setAudioUrl(response.data.audioUrl);
        setStatus(statusValues.success);
        setErr(null);
        setText("");
        console.log(response.data);
      } catch (err: any) {
        setStatus(statusValues.failed);
        setErr(err.message)
      }
    }
  };

  const renderResult = (): React.JSX.Element | undefined => {
    switch (status) {
      case statusValues.success:
      case statusValues.initial:
        return (
          <div className="space-y-8">
            {audioUrl && (
              <div className="bg-linear-to-r from-violet-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-violet-100">
                <div className="flex items-center gap-3 mb-5">
                  <FaPlayCircle className="text-3xl text-violet-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Your Podcast
                  </h2>
                </div>

                <audio controls className="w-full rounded-xl">
                  <source src={audioUrl} type="audio/mpeg" />
                </audio>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setViewScript((prev) => !prev)}
                className="w-full flex justify-between items-center px-6 py-5 bg-linear-to-r from-violet-600 to-cyan-500 text-white font-semibold"
              >
                <div className="flex items-center gap-3">
                  <FaFileAlt />
                  Script
                </div>

                <span>{viewScript ? "Hide" : "View"}</span>
              </button>

              {viewScript && (
                <div className="p-6 bg-gray-50">
                  <p className="leading-8 text-gray-700 whitespace-pre-wrap">
                    {script || "No script generated."}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      case statusValues.loading:
        return (
          <div className="flex flex-col items-center">
            <div className="bg-violet-100 p-6 rounded-full mb-5">
              <HiSparkles className="text-5xl text-violet-600 animate-pulse" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              Generating your podcast...
            </h2>

            <p className="text-gray-500 mt-2">
              Our AI is writing and narrating your content.
            </p>

            <div className="mt-6">
              <DotLoader />
            </div>
          </div>
        );
      case statusValues.failed:
        return (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-red-600">
              {err}
            </h2>
          </div>
        );
      default:
        return;
    }
  };

  console.log(status);

  return (
    <div className="min-h-screen w-screen bg-linear-to-r from-violet-100 via-sky-50 to-cyan-100 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border border-white p-8">
        {/* Header */}

        <div className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="bg-linear-to-r from-violet-600 to-cyan-500 p-5 rounded-full shadow-lg">
              <FaPodcast className="text-white text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-violet-700 to-cyan-500 bg-clip-text text-transparent">
            Podcast Generator
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Convert your ideas into AI-generated podcasts in seconds.
          </p>
        </div>

        {/* Input */}

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="text"
            value={text}
            placeholder="Enter any topic..."
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-6 py-4 rounded-xl border-2 border-violet-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-200 outline-none text-lg shadow-sm transition-all duration-300"
          />

          <button
            onClick={handleSendData}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 active:scale-95 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <FaMagic className="text-lg" />
            Generate
          </button>
        </div>

        {/* Result */}

        <div className="mt-10">{renderResult()}</div>
      </div>
    </div>
  );
};

export default Podcast;
