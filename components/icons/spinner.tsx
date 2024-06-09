import { cn } from "@/lib/utils";

const transforms = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const durations = [ "-1s", "-0.9s", "-0.8s", "-0.7s", "-0.6s", "-0.5s", "-0.4s", "-0.3s", "-0.2s", "-0.1s", "0", "1.1s"];

export default function SpinnerIcon({className}: {className?: string}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="236" height="236" fill="currentColor" className={cn(className)}>
            {transforms.map((_, _i)=> (
                <g key={_i} transform={`rotate(${transforms[_i]} 50 50)`}>
                    <rect height="10" width="2" ry="2" rx="1" y="26" x="49">
                        <animate 
                            repeatCount="indefinite" 
                            begin={durations[_i]} 
                            dur="1.1s" 
                            keyTimes="0;1" 
                            values="1;0" 
                            attributeName="opacity" 
                        />
                    </rect>
                </g>
            ))}
        </svg>
    );
}