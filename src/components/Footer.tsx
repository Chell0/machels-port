const Footer = () => {
  return (
    <>
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Machel Odhiambo. All Rights
          Reserved.
        </p>
        <p className="mt-2">By MGOO</p>
      </footer>
    </>
  );
};

export default Footer;
