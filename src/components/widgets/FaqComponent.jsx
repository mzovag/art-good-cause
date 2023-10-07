import React from "react";

const FaqComponent = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white w-full">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-3xl font-semibold mb-8">
              Frequently Asked Questions:
          </h2>
          <div className="space-y-4">
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                Why should I buy a painting in digital format?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
                As a collector, I will qualify my conditions, under which I would purchase a 
                Digital original. The problem with Digital Art is that there’s no easy way to 
                make it a “one-off,” Print. It’s not that the artist doesn’t work hard and 
                diligently to make it as exemplary as possible. It’s that there is no literal 
                way to “limit the size of the [ possible edition ]” that the artist may or may 
                not make from the same digital file. According to the Civil codes in The Fine 
                Arts Statutes in these 5 States: New York, Florida, Texas, California, 
                and Hawaii; There has to be an apparatus that guarantees the limit of the 
                edition, in writing, furnished to the client prior to purchase, and the 
                Client has to be happy with such proof, before purchase - because without it, 
                the law states that it is only a print multiple, even if the artist say’s 
                he/she is only making “one” print. Because it is so difficult to guarantee 
                that this is true.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                Who gets money from the sale of the painting?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
                A project at the intersection of charity, new technologies and the creativity 
                of special artists. First of all, we want to help foundations and other charitable 
                organizations obtain additional funding. We believe that thanks to our work, the 
                circle of donors will expand, the number of creative programs in organizations 
                will increase, special children and teenagers will receive new opportunities to 
                express themselves, and some will even reach a global level of popularity. If you 
                share these perspectives with us, tell us about us in a chat with your friends or 
                work colleagues. The TokenDobra team and the authors of the paintings from our 
                gallery will be extremely grateful to you.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                What is pre-NFT?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
                Popularization of charity is one of the main tasks of our project. We will be 
                extremely grateful if you support this idea and tell about the gallery in your 
                social networks.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                How can I buy an original painting?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
              It's very simple! You will be able to exchange pre-NFT for NFT at any time, as soon as 
              you are ready (for example, get a web3 wallet). After this you will need:
                write us an email to nft@tokendobra.ru from the email you used when purchasing 
                the pre-NFT
                In the letter, indicate the pre-NFT number you received
                and also indicate the web3 wallet address where you will need to send the issued NFT
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                Are you sure you transfer money to funds?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
                Popularization of charity is one of the main tasks of our project. We will be 
                extremely grateful if you support this idea and tell about the gallery in your 
                social networks.
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-600">
              <summary className="px-4 py-4">
                Does your gallery make money from sales of paintings?
              </summary>
              <p className="px-4 py-6 ml-4 -mt-4 text-gray-600">
                Popularization of charity is one of the main tasks of our project. We will be 
                extremely grateful if you support this idea and tell about the gallery in your 
                social networks.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqComponent;