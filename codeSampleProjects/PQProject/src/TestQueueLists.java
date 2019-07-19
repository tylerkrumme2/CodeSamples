import java.io.File;
import java.util.Arrays;

public class TestQueueLists {

	public static void main(String[] args) {
		PriorityQueueList tree = new PriorityQueueList();
		File firstFile = new File("hello.txt");
		File secondFile = new File("AnotherTestFile.txt");
		File thirdFile = new File("YetAnotherTestFile.txt");
		SizedFile file1 = new SizedFile(firstFile);
		SizedFile file2 = new SizedFile(secondFile);
		SizedFile file3 = new SizedFile(thirdFile);
		tree.add(file3);
		tree.add(file2);
		tree.add(file1);
		System.out.println(tree.toString());
		System.out.println(tree.size());
		System.out.println(Arrays.toString(tree.toArray()));
		System.out.println(tree.toString());
		System.out.println(tree.remove());
		System.out.println(tree.toString());
		
	}
}
