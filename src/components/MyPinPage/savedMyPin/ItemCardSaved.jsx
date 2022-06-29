function ItemCardSaved({ src, size }) {
   return (
      <>
         <img
            style={{ borderRadius: "16px", objectFit: "cover" }}
            alt=""
            src={src}
            width={size}
            height={size}
         />
      </>
   );
}
export default ItemCardSaved;
