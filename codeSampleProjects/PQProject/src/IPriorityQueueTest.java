import static org.junit.Assert.*;

import java.io.File;
import java.util.Arrays;
import java.util.Collection;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameter;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class IPriorityQueueTest {

    @Before
    public void clearQueue() {
        queue.clear(); // make sure we start empty each time
    }
    
	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test 
	public void testQueueCreated() 
	{
		PriorityQueueArray queue = new PriorityQueueArray();
		assertTrue(queue.isEmpty());
	}
	
	@Test
	public void testPeekDefault()
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueArray queue = new PriorityQueueArray();
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
		PriorityQueueArray queue = new PriorityQueueArray();
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
		PriorityQueueArray queue = new PriorityQueueArray();
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
		PriorityQueueArray queue = new PriorityQueueArray();
		queue.add(PQ_File);
		queue.add(PQ_File2);
		assertFalse(fFile.equals(queue.peek()));
	}
	
	@Test
	public void testPeekWithNoItem()
	{
		PriorityQueueArray queue = new PriorityQueueArray();
		assertTrue(queue.peek() == null);
	}
	
	@Test
	public void testPeekNotNull()
	{
		File fFile = new File("Hello.txt");
		SizedFile PQ_File = new SizedFile(fFile);
		PriorityQueueArray queue = new PriorityQueueArray();
		queue.add(PQ_File);
		assertTrue(queue.peek() != null);
	}

}
