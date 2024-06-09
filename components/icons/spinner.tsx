import { cn } from "@/lib/utils";

const transforms = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const durations = [ "-1.0299625468164795s", "-0.9363295880149813s", "-0.8426966292134832s", "-0.7490636704119851s", "-0.6554307116104869s", "-0.5617977528089888s", "-0.46816479400749067s", "-0.37453183520599254s", "-0.2808988764044944s", "-0.18726591760299627s", "-0.09363295880149813s", "1.1235955056179776s"];

export default function SpinnerIcon({className}: {className?: string}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="236" height="236" fill="currentColor" className={cn(className)}>
            {transforms.map((_, _i)=> (
                <g key={_i} transform={`rotate(${transforms[_i]} 50 50)`}>
                    <rect height="10" width="2" ry="2" rx="1" y="26" x="49">
                        <animate repeatCount="indefinite" begin={durations[_i]} dur="1.1235955056179776s" keyTimes="0;1" values="1;0" attributeName="opacity"></animate>
                    </rect>
                </g>
            ))}
        </svg>
    );
}