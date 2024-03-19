const Header = () => {
  return (
    <header>
      <nav className="shadow-default bg-white">
        <div className="cont">
          <div className="h-[64px] row justify-end">
            <div className="flex items-center">
              <p className="font-semibold">AZ</p>
              <div className="ml-4 bg-purple rounded-full w-[32px] h-[32px]"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
