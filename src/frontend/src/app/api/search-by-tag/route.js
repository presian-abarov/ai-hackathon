export async function POST(request) {
  // TODO remove this because we have a backend for the requests
  // const { tag } = request.query;
  const tag = "";

  // Mock response (replace with actual database logic)
  const data = [
    {
      "document_id": "someUUID4sting--1",
      "content": "psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare. psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.",
      "tags": [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5"
      ]
    },
    {
      "document_id": "someUUID4sting-2",
      "content": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare. psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.",
      "tags": [
        "tag6",
        "tag7",
        "tag2",
        "tag8",
        "tag3"
      ]
    },
    {
      "document_id": "someUUID4sting-3",
      "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.",
      "tags": [
        "tag4",
        "tag5",
        "tag9",
        "tag1",
        "tag7"
      ]
    },
    {
      "document_id": "someUUID4sting-4",
      "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      "tags": [
        "tag3",
        "tag8",
        "tag10",
        "tag6",
        "tag4"
      ]
    },
    {
      "document_id": "someUUID4sting-5",
      "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      "tags": [
        "tag2",
        "tag5",
        "tag7",
        "tag9",
        "tag1"
      ]
    },
    {
      "document_id": "someUUID4sting-6",
      "content": "Mollit anim id est laborum.",
      "tags": [
        "tag3",
        "tag6",
        "tag9",
        "tag10",
        "tag2"
      ]
    },
    {
      "document_id": "someUUID4sting-7",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      "tags": [
        "tag7",
        "tag8",
        "tag1",
        "tag5",
        "tag3"
      ]
    },
    {
      "document_id": "someUUID4sting-8",
      "content": "Labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "tags": [
        "tag4",
        "tag10",
        "tag2",
        "tag9",
        "tag6"
      ]
    },
    {
      "document_id": "someUUID4sting-9",
      "content": "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "tags": [
        "tag5",
        "tag7",
        "tag8",
        "tag1",
        "tag4"
      ]
    },
    {
      "document_id": "someUUID4sting-10",
      "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "tags": [
        "tag10",
        "tag2",
        "tag6",
        "tag9",
        "tag7"
      ]
    },
    {
      "document_id": "someUUID4sting-11",
      "content": "Cillum dolore eu fugiat nulla pariatur.",
      "tags": [
        "tag1",
        "tag5",
        "tag3",
        "tag8",
        "tag10"
      ]
    },
    {
      "document_id": "someUUID4sting-12",
      "content": "Sint occaecat cupidatat non proident.",
      "tags": [
        "tag4",
        "tag2",
        "tag9",
        "tag6",
        "tag5"
      ]
    },
    {
      "document_id": "someUUID4sting-13",
      "content": "Laborum lorem ipsum dolor sit amet.",
      "tags": [
        "tag10",
        "tag8",
        "tag7",
        "tag1",
        "tag9"
      ]
    },
    {
      "document_id": "someUUID4sting-14",
      "content": "Velit esse cillum dolore eu fugiat nulla pariatur.",
      "tags": [
        "tag5",
        "tag3",
        "tag7",
        "tag2",
        "tag10"
      ]
    },
    {
      "document_id": "someUUID4sting-15",
      "content": "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "tags": [
        "tag1",
        "tag4",
        "tag6",
        "tag9",
        "tag8"
      ]
    },
    {
      "document_id": "someUUID4sting-16",
      "content": "Eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "tags": [
        "tag10",
        "tag2",
        "tag3",
        "tag7",
        "tag9"
      ]
    },
    {
      "document_id": "someUUID4sting-17",
      "content": "Aliquip ex ea commodo consequat.",
      "tags": [
        "tag5",
        "tag8",
        "tag1",
        "tag4",
        "tag6"
      ]
    },
    {
      "document_id": "someUUID4sting-18",
      "content": "Reprehenderit in voluptate velit esse cillum dolore.",
      "tags": [
        "tag9",
        "tag7",
        "tag2",
        "tag3",
        "tag5"
      ]
    },
    {
      "document_id": "someUUID4sting-19",
      "content": "Excepteur sint occaecat cupidatat non proident.",
      "tags": [
        "tag6",
        "tag1",
        "tag8",
        "tag10",
        "tag4"
      ]
    },
    {
      "document_id": "someUUID4sting-20",
      "content": "Nisi ut aliquip ex ea commodo consequat.",
      "tags": [
        "tag2",
        "tag5",
        "tag9",
        "tag6",
        "tag10"
      ]
    }
  ];

  const filteredData = data.filter((item) => item.tags.includes(tag));

  return new Response(JSON.stringify(filteredData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}