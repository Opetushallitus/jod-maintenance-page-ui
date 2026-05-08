import { NavigationBar } from '@jod/design-system';
import { JodInfo } from '@jod/design-system/icons';

const Root = () => {
  return (
    <>
      <header role="banner" className="sticky top-0 z-30 print:hidden">
        <NavigationBar
          logo={{ to: `/`, language: 'fi', srText: 'Osaamispolku' }}
          renderLink={({ to, className, children }) => (
            <a href={to as string} className={className}>
              {children}
            </a>
          )}
          serviceBarVariant="palveluportaali"
          translations={{
            showAllNotesLabel: 'Näytä kaikki',
            ariaLabelCloseNote: 'Sulje',
          }}
        />
      </header>
      <main id="jod-main" role="main" className="mx-auto w-full max-w-(--breakpoint-xl)">
        <div className="mx-auto grid w-full max-w-[1140px] grow grid-cols-3 gap-6 px-5 pt-[88px] pb-[96px] sm:px-6">
          <div className="col-span-3 flex flex-col p-7 lg:col-span-2">
            <div className="flex items-start">
              <div className="mr-4 flex size-9 shrink items-center justify-center rounded-full bg-secondary-gray">
                <JodInfo className="text-white" />
              </div>
              <h1 className="flex flex-col text-heading-1-mobile text-secondary-gray not-sm:gap-5 sm:text-heading-1">
                <span className="text-hero-mobile sm:text-hero">Huoltokatko käynnissä</span>
                <span className="text-[1.875rem] sm:-mb-3">Underhåll pågår</span>
                <span className="text-[1.875rem]">Maintenance in progress</span>
              </h1>
            </div>
            <div className="mt-7 ml-11 flex flex-col gap-7 text-body-lg text-primary-gray">
              <p>
                Suoritamme järjestelmän huoltotöitä parantaaksemme palvelua. Palvelu ei ole tällä hetkellä
                käytettävissä. Yritä myöhemmin uudelleen.
              </p>
              <p>
                Vi utför underhållsarbete i systemet för att förbättra tjänsten. Tjänsten är för närvarande inte
                tillgänglig. Försök igen senare.
              </p>
              <p>
                We are performing maintenance work to improve the service. The service is currently unavailable. Please
                try again later.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Root;
