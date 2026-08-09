import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const jobs = [
  {
    companyLogo: "https://imgs.search.brave.com/e_Nuk6_IJRzC7cG8hQlHRgCuoA9IsKhyblm5PYgXT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzI2MS9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taWNvbi1m/cmVlLXBuZy5wbmc",
    companyName: "Google",
    postedTime: "2 days ago",
    role: "Frontend Developer",
    price: "$120K - $150K",
    city: "New York, NY",
  },
  {
    companyLogo: "https://imgs.search.brave.com/dNM5-ELWX1rBGGT6ERTxoJdJsiyAxuAMHu0ojE_6TgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL01pY3Jvc29m/dF9Mb2dvXzUxMnB4/LnBuZw",
    companyName: "Microsoft",
    postedTime: "1 day ago",
    role: "React Developer",
    price: "$110K - $140K",
    city: "Seattle, WA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/FvRuMThV08gt9hvvSwroJfzPPgnvqnK2hRv-Y7WLRww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctNzIyNjcx/LnBuZz9mPXdlYnAm/dz0xMjg",
    companyName: "Amazon",
    postedTime: "5 hours ago",
    role: "Software Engineer",
    price: "$115K - $145K",
    city: "Austin, TX",
  },
  {
    companyLogo: "https://imgs.search.brave.com/toK1qnXF3hsMVBtS_X3uMzUPH0ZYPXMZ59vfHbc37Dw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9y/b3VuZC1uZXRmbGl4/LWxvZ28tNzAxNzUx/Njk0NzkyNjA3YmVt/bGZhenJybC5wbmc_/dj0yMDI2MDgwNzA4",
    companyName: "Netflix",
    postedTime: "3 days ago",
    role: "UI Developer",
    price: "$125K - $160K",
    city: "Los Angeles, CA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/0pbAjdXdDiEUsNdxwrhnx8j4Ytj8My4DKFHWZfOwql4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n",
    companyName: "Spotify",
    postedTime: "8 hours ago",
    role: "Frontend Engineer",
    price: "$100K - $135K",
    city: "Boston, MA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/n-s82rOFwgn-0BxP8cU39jriBNFyvmbRS1-Fqaa5SxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM4LzIvYWRvYmUt/aWxsdXN0cmF0b3It/bG9nby1wbmdfc2Vl/a2xvZ28tMzgwNTU5/LnBuZw",
    companyName: "Adobe",
    postedTime: "4 days ago",
    role: "React Engineer",
    price: "$105K - $140K",
    city: "San Jose, CA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/ucAMHOXDCx8j4tKS0wSQSf12WHZQ2q-E5PwV-hqSSNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFpcmJuYi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/Mjg1MDcwLnBuZz9m/PXdlYnAmdz0xMjg",
    companyName: "Airbnb",
    postedTime: "12 hours ago",
    role: "Product Engineer",
    price: "$120K - $155K",
    city: "San Francisco, CA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/j5uDkBFQdubYszJLNnVuT7pzhdqe4muS5J8raXoMzMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cG5nZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL21l/dGEtbG9nby0wNC5w/bmc",
    companyName: "Meta",
    postedTime: "1 hour ago",
    role: "Frontend Engineer",
    price: "$130K - $170K",
    city: "Menlo Park, CA",
  },
  {
    companyLogo: "https://imgs.search.brave.com/K2VrQvJ9LXOzH9phB9kUbQgqii1JcaXJDkPwDOMKSpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLm1h/Z25pZmljLmNvbS8y/NTYvMjUwNC8yNTA0/ODE0LnBuZz9zZW10/PWFpc193aGl0ZV9s/YWJlbA",
    companyName: "Shopify",
    postedTime: "2 days ago",
    role: "Web Developer",
    price: "$95K - $130K",
    city: "Toronto, Canada",
  },
  {
    companyLogo: "https://imgs.search.brave.com/5YEwYfjkJQFgwtCV0wRyjGu1fMFI-krKxY9uKJLVyY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZGlkTmJpaU9k/L3cvMzk5L2gvMzk5/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTY2ODUxNTI3OTgw/Nw",
    companyName: "Uber",
    postedTime: "6 hours ago",
    role: "Software Developer",
    price: "$105K - $145K",
    city: "Chicago, IL",
  },
];

  return (
    <div className='p-5 flex flex-wrap gap-5'>
      {jobs.map((elem, idx) => {
        return (
          <Card logo={elem.companyLogo} companyName={elem.companyName} time={elem.postedTime} role={elem.role} 
            price={elem.price} city={elem.city} key={idx}
          />
        )
      })}
    </div>
  )
}

export default App