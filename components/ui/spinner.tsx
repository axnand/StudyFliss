export default function Spinner() {
    return (
        <div className="flex items-center justify-center ">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="-8 -8 150 150"
                className="size-48 fill-none flex items-center justify-center p-8 border-2 border-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/10 hover:shadow-xl transition-all duration-300 ease-in-out-sine rounded-full"
                stroke="hsl(var(--primary)/0.8)"
                strokeWidth={0.5}
            >
                <g transform="translate(0, -69.16029099675677) scale(3.331619901699667)" className="">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{ strokeDasharray: 35, strokeDashoffset: 0 }}
                        className="motion-reduce:animate-none animate-[move_40s_linear_infinite]"
                        d="M13.2,39.4c4.2,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5H3l4.5-9.2h3.7l-2.9,5.8h4.8c2.3,0,4.2-1.8,4.2-4.2
		c0-2.3-1.8-4.2-4.2-4.2H9.5c-3.9,0-7.1-3.2-7.1-7.1s3.2-7,7.1-7V32c-2.1,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7L13.2,39.4L13.2,39.4z
		 M11.9,37.1l2.5-5.1H11v-3.4h8.7l-4.1,8.4C15.6,37.1,11.9,37.1,11.9,37.1z M30.4,38.7l3.4-6.7H23.4v-3.4h15.8l-5.1,10H30.4z
		 M26.8,34.1v7.1H37v3.4H26.8v9.8h-3.4V34.1H26.8L26.8,34.1z"
                    />
                </g>
            </svg>
        </div>
    );
}
