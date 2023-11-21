"use client"

import supabase from "@/src/provider/supabase";
import { useEffect, useState } from "react";

interface Ipost {
	id: string;
	text: string;
}


export default function Home() {
	const [posts, setPosts] = useState<Ipost[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				let { data: postData, error } = await supabase.from('post').select('*');
				if (error) {
					throw error
				}
				if (Array.isArray(postData)) {
					setPosts(postData);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}

		};
		fetchData();
	}, [])


	return (
		<div>
			<h1>All Posts</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.text}</li>
				))}
			</ul>
		</div>
	);
};

