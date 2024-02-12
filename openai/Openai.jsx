
// // 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
// // function Mybard()
// // {
// //     return(
// //         <div>
// //             <input type="text" placeholder="search here"  style={{width:"500px",height:"70px"}}/>
// //         </div>
// //     )
// // }
// // export default Mybard;

// // // SearchComponent.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const SearchComponent = () => {
// //   const [query, setQuery] = useState('');
// //   const [response, setResponse] = useState('');

// //   const handleSearch = async () => {
// //     try {
// //       const apiKey = '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';
// //       const result = await axios.post(
// //         'https://api.openai.com/v1/engines/davinci-codex/completions',
// //         {
// //           prompt: query,
// //           max_tokens: 150,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${apiKey}`,
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       );
// //       setResponse(result.data.choices[0].text.trim());
// //     } catch (error) {
// //       console.error('Error searching:', error);
// //     }
// //   };
// //https://www.youtube.com/watch?v=0e31a6HUPGc
// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Type your query..."
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //       />
// //       <button onClick={handleSearch}>Search</button>
// //       {response && <div>Response: {response}</div>}
// //     </div>
// //   );
// // };

// // export default SearchComponent;



// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState(null);

//   const apiKey = 'eQjRejY3LFIvBc_id6qn9wad_Nk7nhktFZjrtUNquEDey43ZysH19RQyx5NScPAbuPjwhQ'; // Replace with your Bard API key

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`https://api.bard.com/search`, {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         params: {
//           q: query,
//         },
//       });

//       setResults(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error searching:', error);
//       setError('Error fetching results. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Type your query..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {results && (
//         <div>
//           <h2>Results:</h2>
//           {/* Display results in your component */}
//           <pre>{JSON.stringify(results, null, 2)}</pre>
//         </div>
//       )}

//       {error && <div>Error: {error}</div>}
//     </div>
//   );
// };

// export default SearchComponent;
import React from 'react';

function FileUploader() {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile); // You can perform actions with the selected file, such as uploading it
    };
    
    return (
        <div>
            <div htmlFor="fileInput">Browse</div>
            <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
            />
        </div>
    );
}

export default FileUploader;

