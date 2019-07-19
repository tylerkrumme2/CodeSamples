import static org.junit.Assert.*;

import java.io.File;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class PriorityQueueTreeTest {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test 
	public void testQueueCreated() 
	{
		PriorityQueueTree queue = new PriorityQueueTree();
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testPeekDefault()
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertTrue(fFile.equals(queue.peek()));
	}
	
	@Test
	public void testPeekAfterRemoval()
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		queue.peek();
		queue.remove();
		assertTrue(fFile.equals(queue.peek()));
	}
	
	@Test
	public void testPeekWithMultipleFiles()
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		assertTrue(sFile.equals(queue.peek()));
	}
	
	@Test
	public void testCorrectHeadFile() //I believe this would technically be an add test.
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		assertFalse(fFile.equals(queue.peek()));
	}
	
	@Test
	public void testPeekWithNoItem()
	{
		PriorityQueueTree queue = new PriorityQueueTree();
		assertTrue(queue.peek() == null);
	}
	
	@Test
	public void testPeekNotNull()
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertTrue(queue.peek().equals(fFile));
	}
	
	@Test
	public void testIsEmpty() 
	{
		PriorityQueueTree queue = new PriorityQueueTree();
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testIsEmptyAfterRemoval() 
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.remove();
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testIsEmptyWhenFull() 
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertFalse(queue.isEmpty());
	}
	
	@Test
	public void testRemoveWhenNull() 
	{
		PriorityQueueTree queue = new PriorityQueueTree();
		assertEquals(null, queue.remove());
	}
	
	@Test
	public void testRemovedItemIsCorrect() 
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertTrue(PQ_File.equals(queue.remove()));
	}
	
	@Test
	public void testAdd()
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertTrue(fFile.equals(queue.peek()));
	}
	
	@Test
	public void testAddMultipleFiles() 
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		File tFile = new File("YetAnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		SizedFile PQ_File3 = new SizedFile(tFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		queue.add(PQ_File3);
		assertEquals(queue.size(), 3);
	}
	
	@Test
	public void testSize() 
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertEquals(queue.size(), 1);
	}
	
//	@Test //I think that this is how we would go about testing this, but it crashed my laptop...
//	public void testSizeAboveIntMax() 
//	{
//		File fFile = new File("Hello.txt");
//		SizedFile PQ_File = new SizedFile(fFile);
//		PriorityQueueTree queue = new PriorityQueueTree();
//		long testLoop = 0;
//		while(testLoop < ((long) Integer.MAX_VALUE + 5)) {
//			queue.add(PQ_File);
//			testLoop++;
//		}
//		assertEquals(Integer.MAX_VALUE, queue.size());
//	}
	
	@Test
	public void testClear() 
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		File tFile = new File("YetAnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		SizedFile PQ_File3 = new SizedFile(tFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		queue.add(PQ_File3);
		queue.clear();
		//assertEquals(queue.size(), 0); //Works with either of these asserts.
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testClearNullQueue() 
	{
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.clear();
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testContains() 
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		assertTrue(queue.contains(PQ_File));
	}
	
	@Test
	public void testDoesNotContain() 
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		File tFile = new File("YetAnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		SizedFile PQ_File3 = new SizedFile(tFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		assertFalse(queue.contains(PQ_File3));
	}

	@Test
	public void testToArray() 
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		File tFile = new File("YetAnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		SizedFile PQ_File3 = new SizedFile(tFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		queue.add(PQ_File3);
		queue.toArray();
		SizedFile[] testArray = new SizedFile[3];
		testArray[0] = PQ_File2; // Like this because of sorting
		testArray[1] = PQ_File;
		testArray[2] = PQ_File3;
		assertEquals(testArray, queue.toArray());
	}
	
	@Test
	public void testToString() 
	{
		File fFile = new File("Hello.txt");
		File sFile = new File("AnotherTestFile.txt");
		File tFile = new File("YetAnotherTestFile.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		SizedFile PQ_File2 = new SizedFile(sFile);
		SizedFile PQ_File3 = new SizedFile(tFile);
		PriorityQueueTree queue = new PriorityQueueTree();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		queue.add(PQ_File3);
		String expected = "[ AnotherTestFile.txt(0),  Hello.txt(0),  YetAnotherTestFile.txt(0) ]";
		assertTrue(expected.equals(queue.toString()));
	}
}


