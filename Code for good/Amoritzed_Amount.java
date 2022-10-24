import java.util.Scanner;
/**
 * Program that acts as a house mortgage calculator which calculates a monthly amortized
 amount
 *
 */
public class Amoritzed_Amount {
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String input;
        double loanAmount;
        double rate;
        double years;
        double months;
        double monthlyPayment;
        System.out.print("Enter loan amount: $ ");
        input = in.nextLine();
        loanAmount = Double.parseDouble(input);
        System.out.print("Enter rate: ");
        input = in.nextLine();
        rate = Double.parseDouble(input);
        System.out.print("Enter number of years: ");
        input = in.nextLine();
        years = Double.parseDouble(input);
        months = years * 12;
        rate = (rate / 12) / 100;
        monthlyPayment = rate * loanAmount * Math.pow(1 + rate, months) / (Math.pow(1 + rate,
                months) - 1);
        System.out.println();
        System.out.printf("The monthly payment is: $%.2f%n", monthlyPayment);
    }
}
