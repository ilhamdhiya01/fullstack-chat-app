import classNames from "classnames";
import { Image, Send } from "lucide-react";

const ChatInput = () => (
  <form className="flex items-center gap-2">
    <div className="flex-1 flex gap-2">
      <input
        type="text"
        className="w-full input input-bordered rounded-lg input-sm sm:input-md"
        placeholder="Type a message..."
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        // ref={fileInputRef}
        // onChange={handleImageChange}
      />

      <button
        type="button"
        className={classNames("hidden sm:flex btn btn-circle", {
          "text-emerald-500": true,
          "text-zinc-400": !true,
        })}
      >
        <Image size={20} />
      </button>
    </div>
    <button
      type="submit"
      className="btn btn-sm btn-circle"
      // disabled={!text.trim() && !imagePreview}
    >
      <Send size={22} />
    </button>
  </form>
);

export default ChatInput;
