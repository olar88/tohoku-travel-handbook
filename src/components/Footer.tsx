import { Coffee, Heart, Snowflake } from "lucide-react";

/** Footer component*/
export function MyFooter() {
    return <footer className="mt-40 mb-4 text-center pb-1">
        <div className="inline-block p-4 border-t border-[#d7ccc8] border-dashed w-full max-w-md">
            <div className="flex justify-center gap-4 text-[#a1887f] mb-2 opacity-70">
                <Snowflake size={20} />
                <Heart size={20} />
                <Coffee size={20} />
            </div>
            <p className="text-sm text-[#8d6e63] font-medium">2026 Winter Memories </p>
            <span className="text-xs text-[#8d6e63] font-medium">Copyright © 2026 Odette. All rights reserved. </span>
        </div>
    </footer>
}