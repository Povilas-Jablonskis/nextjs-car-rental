export default function Footer() {
  return (
    <footer className="grid gap-y-12 bg-transparent p-6 lg:gap-y-9 lg:bg-white 2xl:px-16 2xl:py-20">
      <div className="grid grid-cols-2 gap-y-12 *:flex *:flex-col *:items-start *:gap-y-4 lg:grid-cols-6">
        <div className="col-span-2 gap-y-6 lg:col-span-3 lg:gap-y-4">
          <span className="text-2xl font-bold text-primary-500 lg:text-2base">
            MORENT
          </span>
          <span className="max-w-72 text-base font-medium text-secondary-300 lg:text-footer">
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div>
          <span className="text-xl font-semibold text-secondary-500">
            About
          </span>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            How it works
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Featured
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Partnership
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Bussiness Relation
          </button>
        </div>
        <div>
          <span className="text-xl font-semibold text-secondary-500">
            Community
          </span>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Events
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Blog
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Podcast
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Invite a friend
          </button>
        </div>
        <div>
          <span className="text-xl font-semibold text-secondary-500">
            Socials
          </span>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Discord
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Instagram
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Twitter
          </button>
          <button className="text-base font-medium text-secondary-300 lg:text-footer">
            Facebook
          </button>
        </div>
      </div>
      <div className="hidden border border-[#131313]/15 lg:block"></div>
      <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:justify-between">
        <span className="text-xs font-semibold text-secondary-500 lg:text-base">
          ©2022 MORENT. All rights reserved
        </span>
        <div className="flex justify-between gap-x-14">
          <button className="text-xs font-semibold text-secondary-500 lg:text-base">
            Privacy & Policy
          </button>
          <button className="text-xs font-semibold text-secondary-500 lg:text-base">
            Terms & Condition
          </button>
        </div>
      </div>
    </footer>
  );
}
