const conf = {
     URL : String(import.meta.env.VITE_APPWRITE_URL),
     PID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
     DBID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
     CID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
     BID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;