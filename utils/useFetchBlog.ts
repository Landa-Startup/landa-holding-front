import { useEffect } from "react";
import { useSubmit } from "stores/dataStore";

const { setCardData } = useSubmit();

async function FetchBlogData(url: string) {
  url = `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}${url}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
}


export default async function useFetchBlog(url: string, stateNme: string) {

  switch (stateNme) {
    case "cardsData":
      useEffect(() => {
        // Inside the useEffect, fetch the data and update the state
        async function fetchData() {
          try {
            const data = await FetchBlogData(url);
            setCardData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      break
  }
  //   case "cardData":
  //     break
  // }
  //   case "categories":
  //     break
  // }
  //   case "tags":
  //     break
  // }

}
