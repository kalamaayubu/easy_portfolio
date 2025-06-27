'use client';

import CongratsCard from "@/components/client/CongratsCard"
import { useState } from "react";

const CongratsPage = () => {
    const [showCongrats, setShowCongrats] = useState(true);
  return (
    <div>
        {showCongrats && (
            <CongratsCard 
                title={"🎉 Congratulations!"}
                message={'Your portfolio has been published successfully!'} 
                action1={{label: 'View Portfolio', href: '/'}}
                action2={{label: 'Copy Link', href: 'https://easy-portfolio.vercel.app/'}}
                onClose={() => setShowCongrats(false)} // close handler
            />
        )}
    </div>
  )
}

export default CongratsPage