import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111110",
          borderRadius: 40,
        }}
      >
        <svg width="124" height="54" viewBox="50 32 490 210">
          <g fill="#F4F1EA">
            <path d="M112.73,230.36h-53.93V39.43h53.93c60.12,0,96.24,35.35,96.24,95.46s-36.12,95.47-96.24,95.47ZM112.73,46.39h-46.18v177h46.18c55.21,0,88.5-32.77,88.5-87.98s-32.51-89.02-88.5-89.02Z" />
            <path d="M300.31,233.71c-54.7,0-99.08-41.54-99.08-98.82s44.38-98.82,99.08-98.82c35.09,0,69.4,17.29,86.69,45.67h-9.29c-19.09-25.03-46.19-38.7-77.4-38.7-50.57,0-91.34,38.96-91.34,91.85s40.77,91.85,91.34,91.85,85.4-34.58,92.37-70.18h-113.78v-6.97h123.07c-5.42,46.19-48.25,84.11-101.66,84.11Z" />
            <path d="M528.21,230.36l-31.64-73.53h-93.86l-31.64,73.53h-8.26l81.79-190.93h10.06l81.79,190.93h-8.26ZM449.52,46.65l-43.59,102.79h87.13l-43.54-102.79Z" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  )
}
