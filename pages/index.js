import { app, database } from "../firebase/clientApp";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

export default function Home({ entriesData }) {
  const [items, setItems] = useState();

  // Weekend tasks

  // Add filtering by most upvotes

  // Add upvoting
  // Add email auth
  // Auth via email
  // Create user account
  // Add upvote
  // Remove upvote
  // Cloud function to total upvotes and place it into object

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "renders"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (value) {
      let docs = value.docs;
      console.log(docs);
      setItems(docs)
    }
  }, [value]);

  const handleShuffle = () => {
    let shuffled = items
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setItems(shuffled);
  };

  return (
    <div className="w-screen p-4 bg-amber-100">
      <div className="bg-amber/50 backdrop-blur-xl flex flex-row z-50 fixed top-4 left-4 text-yeezy border border-black rounded text-black">
        <div>
          <p className="font-bold p-4">YEEZYAI</p>
        </div>
        <div className="flex flex-row items-center border-l border-black">
          <p className="text-xs p-4">An AI that designs yeezys.</p>
        </div>
      </div>
      <div className="hover:cursor-pointer hover:opacity-50 bg-amber/50 backdrop-blur-xl flex flex-row z-50 fixed top-8 right-4 text-yeezy border border-black rounded text-black">
        <button onClick={() => handleShuffle()}className="text-sm px-1">Shuffle</button>
      </div>
      <div>
        {items && (
          <div className="grid grid-cols-4 gap-4 pt-20">
            {items.map((doc) => (
              <div className="text-white" key={doc.id}>
                <div className="relative group">
                  {/* <div className="transition-all duration-300 group-hover:opacity-100 opacity-0 flex items-center justify-center z-20 top-0 left-0 h-full w-full absolute bg-amber-500/10 backdrop-blur-lg">
                    <button className="border rounded-full py-1 px-4 border-black hover:opacity-50">Upvote</button>
                  </div> */}

                  <Image
                    className="w-full"
                    layout="responsive"
                    width={500}
                    height={500}
                    src={doc.data().imageUrl}
                    placeholder="blur"
                    blurDataURL={doc.data().imageUrl}
                  ></Image>
                </div>

                <div className="text-black flex flex-row w-full justify-between">
                  <p className="text-xs opacity-40 italic">
                    id {doc.data().productID}
                  </p>
                  {/* <p className="text-sm opacity-80">24 likes</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/*  */}
      <div className="bg-amber/50 backdrop-blur-xl flex flex-row z-50 fixed bottom-4 right-4 text-yeezy border border-black rounded text-black">
        <div className="text-xs flex flex-row items-center border-black">
          <Link className="text-xs" href="https://twitter.com/0xpkeating">
            <a className="p-4" target="_blank" ref="no_opener">
              Have any questions? DMs open
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

// User auth
// User like / dislike
