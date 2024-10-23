import Link from "next/link";
import {db} from "~/server/db";

/*const mockUrls = [
  "https://utfs.io/f/0e9a0639-2680-436f-b691-58937c705f06-jpjvz5.webp",
  "https://utfs.io/f/00600404-5aa6-49d2-b966-3c4f0a32e72f-c6p98r.jpg",
  "https://utfs.io/f/d7f3bd40-2f65-4f37-a285-602cf111d89c-1ody.jpg",
  "https://utfs.io/f/6a5c1840-237d-4005-b963-87e35837fb16-nm33wo.jpg",
  "https://utfs.io/f/2af56916-a47f-4e05-9b14-a67d93d569ef-2us.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}))
*/
export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://utfs.io/f/2af56916-a47f-4e05-9b14-a67d93d569ef-2us.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Click here to get this car for free</h2>
          <p>Totally not a scam just click it and its yours!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>


    </main>
  );
}




