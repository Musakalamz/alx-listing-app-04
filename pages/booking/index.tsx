import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

// Inline CancellationPolicy component
const CancellationPolicy = () => (
  <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a
      partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your Host's home like your own</li>
    </ul>
  </div>
);

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <BookingForm />
          <CancellationPolicy />
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}
