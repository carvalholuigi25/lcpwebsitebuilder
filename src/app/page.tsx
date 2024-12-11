'use client';

import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <div className="flex-1 w-full h-full overflow-hidden">
        <GrapesJsStudio
          style={{flexGrow: 1, height: '100vh'}}
          options={{
            licenseKey: process.env.LICENSEKEY!,
            project: {
              default: {
                pages: [
                  {
                    name: 'Home',
                    component: `<h1 style="padding: 2rem; text-align: center">
                      Hello Studio 👋
                    </h1>`,
                  },
                ],
              },
            },
          }}
        />
      </div>
    </main>
  );
}
