import { db } from "@/server/db";
import { Newfile } from "@/server/db/schema/file";
import { expect, test, describe } from "vitest";

const newFile: Newfile = {
	key: "32423432",
	name: "kim",
	userId: "142f3cfe-5615-4cb8-acc8-35e6de7d155d",
	url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/234324324`,
	uploadStatus: "PROCESSING",
};


test("file succefully updated?", async () => {
	//const createdFile = await db.insert(file).values(newFile);
	const count = await db.query.file.findFirst.length;
	expect(count).toBe(1);
});
