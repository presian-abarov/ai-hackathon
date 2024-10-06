export async function POST(request) {
  // TODO delete this because we have a backend for the requests
  const data = {
    "document_id": "someUUID4sting--1",
    "content": "psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare. psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.psum, pretium accumsan ornare eu, fringilla et sapien. Donec purus nisl, dignissim ut enim porttitor, fringilla porttitor purus. Etiam sed libero quis lectus dapibus dapibus. Cras venenatis ac turpis eu congue. Maecenas odio justo, varius eu felis et, ultrices fringilla odio. Duis pretium risus nec rutrum semper. Cras sodales scelerisque semper. Integer ultricies est sagittis mauris lobortis venenatis. Vestibulum aliquet dictum fringilla. Sed pellentesque, dui faucibus placerat lobortis, odio nibh ullamcorper diam, non ultrices urna metus at quam. Donec non lectus ultrices nisi vestibulum porta at vitae felis. Proin gravida facilisis nibh a feugiat. Vestibulum et condimentum tellus, mattis commodo urna. In consectetur vitae ante consequat ornare.",
    "tags": [
      "tag1",
      "tag2",
      "tag3",
      "tag4",
      "tag5"
    ]
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}