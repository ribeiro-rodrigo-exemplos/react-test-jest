import SoundPlayer from './SoundPlayer'
import SoundPlayerConsumer from './SoundPlayerConsumer'
jest.mock('./SoundPlayer')


beforeEach(() => {
    SoundPlayer.mockClear()
})

it('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer()
    expect(SoundPlayer).toHaveBeenCalledTimes(1)
})

it('We can check if the consumer called a method on the class instance', () => {
    expect(SoundPlayer).toHaveBeenCalledTimes(0)

    const soundPlayerConsumer = new SoundPlayerConsumer()
    expect(SoundPlayer).toHaveBeenCalledTimes(1)

    const coolSoundFileName = 'song.mp3'
    soundPlayerConsumer.playSomethingCool()

    const mockSoundPlayerInstance = SoundPlayer.mock.instances[0]
    const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName)

    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName)
    expect(mockPlaySoundFile).toHaveBeenCalledTimes(1)
})

it('When SoundPlayer throws an error', () => {
    SoundPlayer.mockImplementation(() => {
        return {
            playSoundFile() {
                throw new Error('Test error')
            }
        }
    })

    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow()
})