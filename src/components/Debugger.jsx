// "use client"

// import { useState } from "react"
// import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwriteConfig"
// import { Query } from "appwrite"

// /**
//  * A debugging component to help troubleshoot Appwrite issues
//  * You can add this to any page temporarily to debug your Appwrite connection
//  */
// const AppwriteDebugger = () => {
//   const [debugInfo, setDebugInfo] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const runDebugCheck = async () => {
//     setLoading(true)
//     setError(null)
//     setDebugInfo(null)

//     try {
//       // Test basic connection by getting all documents
//       const allDocs = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.limit(100)])

//       // Get collection info
//       const collectionInfo = {
//         databaseId: DATABASE_ID,
//         collectionId: COLLECTION_ID,
//         totalDocuments: allDocs.total,
//         documents: allDocs.documents.map((doc) => ({
//           id: doc.$id,
//           movie_id: doc.movie_id,
//           searchTerm: doc.searchTerm,
//           searchCount: doc.searchCount || 0,
//           hasPosterPath: !!doc.poster_path,
//         })),
//       }

//       setDebugInfo(collectionInfo)
//     } catch (err) {
//       console.error("Debug check failed:", err)
//       setError(err.message || "Failed to connect to Appwrite")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-4 bg-gray-800 rounded-lg mt-8">
//       <h2 className="text-xl font-bold text-white mb-4">Appwrite Debugger</h2>

//       <button
//         onClick={runDebugCheck}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Checking..." : "Check Appwrite Connection"}
//       </button>

//       {error && (
//         <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-200">
//           <h3 className="font-bold">Error:</h3>
//           <p>{error}</p>
//         </div>
//       )}

//       {debugInfo && (
//         <div className="mt-4 p-3 bg-gray-700 rounded">
//           <h3 className="font-bold text-white">Debug Information:</h3>
//           <p className="text-gray-300">Database ID: {debugInfo.databaseId}</p>
//           <p className="text-gray-300">Collection ID: {debugInfo.collectionId}</p>
//           <p className="text-gray-300">Total Documents: {debugInfo.totalDocuments}</p>

//           <h4 className="font-bold text-white mt-4">Documents:</h4>
//           {debugInfo.documents.length === 0 ? (
//             <p className="text-yellow-400">No documents found in collection!</p>
//           ) : (
//             <div className="mt-2 overflow-x-auto">
//               <table className="min-w-full bg-gray-800 text-gray-300">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-2 text-left">ID</th>
//                     <th className="px-4 py-2 text-left">Movie ID</th>
//                     <th className="px-4 py-2 text-left">Search Term</th>
//                     <th className="px-4 py-2 text-left">Search Count</th>
//                     <th className="px-4 py-2 text-left">Has Poster</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {debugInfo.documents.map((doc, index) => (
//                     <tr key={doc.id} className={index % 2 === 0 ? "bg-gray-700" : ""}>
//                       <td className="px-4 py-2">{doc.id}</td>
//                       <td className="px-4 py-2">{doc.movie_id}</td>
//                       <td className="px-4 py-2">{doc.searchTerm}</td>
//                       <td className="px-4 py-2">{doc.searchCount}</td>
//                       <td className="px-4 py-2">{doc.hasPosterPath ? "Yes" : "No"}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default AppwriteDebugger
