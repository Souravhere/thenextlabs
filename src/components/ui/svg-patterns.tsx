export const MeshPattern1 = () => (
    <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mesh-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-1)" />
    </svg>
  )
  
  export const MeshPattern2 = () => (
    <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mesh-2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-2)" />
    </svg>
  )
  
  export const MeshPattern3 = () => (
    <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mesh-3" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M0 25h50M25 0v50" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-3)" />
    </svg>
  )
  
  