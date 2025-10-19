import { Card } from "./components/card";

export default function Home() {
  const componentList = [
    {
      title: "Base64",
      description: "Encoding & Decoding base 64 values",
      link: "/base64",
    },
    {
      title: "URL Encoder/Decoder",
      description: "Encode and decode URLs",
      link: "/url-encoder",
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON data",
      link: "/json-formatter",
    },
    {
      title: "JWT Decoder",
      description: "Decode and verify JSON Web Tokens",
      link: "/jwt-decoder",
    },
    {
      title: "Swagger Ui",
      description: "View and interact with Swagger API documentation",
      link: "/swagger-ui",
    }
  ];
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-4xl text-gray">Multi Utility Tools</div>
        <div className="grid grid-cols-3 grid-rows-6 gap-4">
          {componentList.map((component) => (
            <div className="row-span-2" key={component.title}>
              <Card
                title={component.title}
                description={component.description}
                link={component.link}
              ></Card>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
