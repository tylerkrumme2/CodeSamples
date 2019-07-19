
/**
 * IPriorityQueue defines an interface for Priority Queues of SizedFiles. Priority queues of Sized
 * Files prioritize small files first.
 * 
 * Your implementation must note the performance of each of its operations in their method comments.
 * 
 * @author agarripoli (c)
 * @version 20180403
 */
public interface IPriorityQueue {

  /**
   * Inserts the specified SizedFile into this priority queue. The queue must be able to hold
   * potentially up to Integer.MAX_VALUE entries.
   * 
   * The item is placed in the queue in order according to its natural ordering. The first item in
   * the queue has the "smallest" value.
   * 
   * @param file to be inserted
   * @throws NullPointerException if the specified item is null
   * @throws IllegalStateException if this would be the Integer.MAX_VALUE + 1st entry in the queue
   */
  public void add(SizedFile file);

  /**
   * Removes all of the elements from this priority queue. The queue will be empty after this call
   * returns.
   */
  public void clear();

  /**
   * Returns true if this queue contains the specified element. The queue contains the specified
   * element if it has at least one entry in it with entry.equals(element) evaluating to true.
   * 
   * @param file the file to look for in the queue
   * @return true if the file is in the queue already; false otherwise
   */
  public boolean contains(SizedFile file);

  /**
   * Returns true if this queue contains no elements.
   * 
   * @return true if no elements in queue, false otherwise.
   */
  public boolean isEmpty();

  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
   * The queue is not changed.
   * 
   * @return first item in the priority queue
   */
  public SizedFile peek();

  /**
   * Retrieves and removes the head of this queue. The item is no longer in the queue once this
   * completes.
   * 
   * @return first item in the priority queue
   * @throw NoSuchElementException if this queue is empty
   */
  public SizedFile remove();

  /**
   * Returns the number of elements in this queue. Returns the number of elements in this collection.
   * If this collection contains more than Integer.MAX_VALUE elements, returns Integer.MAX_VALUE.
   * 
   * @return number of elements in this queue
   */
  public int size();

  /**
   * Returns an array containing all of the elements in this queue in priority order.
   * 
   * The returned array will be "safe" in that no references to it are maintained by this queue. (In
   * other words, this method must allocate a new array). The caller is thus free to modify the
   * returned array.
   * 
   * @return new array holding the elements in the queue, in priority order
   */
  public SizedFile[] toArray();

  /**
   * Returns a string representation of this queue. The string representation consists of a list of
   * the queue's elements in priority, enclosed in square brackets ("[]"). Adjacent elements are
   * separated by the characters ", " (comma and space). Elements are converted to strings as by
   * String.valueOf(Object).
   * 
   * @return the string representation of the priority queue.
   */
  public String toString();

}
